'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Loading from './Loading';
import { motion, AnimatePresence } from 'framer-motion';
import CartNotification from './CartNotification';
import { useEffect } from 'react';

const Navbar = dynamic(() => import('./Navbar').then(mod => ({ default: mod.Navbar })), {
  loading: () => <div className="h-20" />,
  ssr: true
});

const Footer = dynamic(() => import('./Footer'), {
  loading: () => <div className="h-40" />,
  ssr: true
});

// Animation variants for page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  duration: 0.6
};

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isCheckout = pathname === '/checkout';

  useEffect(() => {
    // Remove attributes that browser extensions (e.g. Grammarly) sometimes inject
    // which cause hydration mismatches during SSR -> client hydration.
    try {
      const attrs = ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed'];
      attrs.forEach((a) => {
        if (document.body && document.body.hasAttribute(a)) document.body.removeAttribute(a);
        if (document.documentElement && document.documentElement.hasAttribute(a)) document.documentElement.removeAttribute(a);
      });
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    // Instrument event listeners to detect long-running handlers that may cause high INP.
    // This wraps addEventListener/removeEventListener for common interaction events and
    // logs handlers that take longer than THRESHOLD_MS to execute.
    const THRESHOLD_MS = 150;
    const LISTENER_MAP = Symbol('listenerMap');

    const originalAdd = EventTarget.prototype.addEventListener;
    const originalRemove = EventTarget.prototype.removeEventListener;

    function wrapListenerIfNeeded(target, type, listener) {
      if (typeof listener !== 'function') return listener;
      const interactiveEvents = new Set(['click', 'pointerdown', 'pointerup', 'touchstart', 'touchend', 'mousedown', 'mouseup']);
      if (!interactiveEvents.has(type)) return listener;

      const wrapped = function (...args) {
        const start = performance.now();
        try {
          return listener.apply(this, args);
        } finally {
          const dur = performance.now() - start;
          if (dur > THRESHOLD_MS) {
            // eslint-disable-next-line no-console
            console.warn('[INP-INSTR] Long event handler', { type, duration: Math.round(dur), target: this, fnName: listener.name || '<anonymous>' });
          }
        }
      };

      // store mapping so removeEventListener can find the wrapped function
      if (!target[LISTENER_MAP]) target[LISTENER_MAP] = new Map();
      target[LISTENER_MAP].set(listener, wrapped);
      return wrapped;
    }

    EventTarget.prototype.addEventListener = function (type, listener, options) {
      try {
        const wrapped = wrapListenerIfNeeded(this, type, listener);
        return originalAdd.call(this, type, wrapped, options);
      } catch (e) {
        return originalAdd.call(this, type, listener, options);
      }
    };

    EventTarget.prototype.removeEventListener = function (type, listener, options) {
      try {
        const map = this[LISTENER_MAP];
        const wrapped = map && map.get && map.get(listener);
        if (wrapped) {
          map.delete(listener);
          return originalRemove.call(this, type, wrapped, options);
        }
        return originalRemove.call(this, type, listener, options);
      } catch (e) {
        return originalRemove.call(this, type, listener, options);
      }
    };

    return () => {
      // restore originals
      EventTarget.prototype.addEventListener = originalAdd;
      EventTarget.prototype.removeEventListener = originalRemove;
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen flex flex-col"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
  {!isCheckout && <Navbar className="z-50" />}
  {/* Global cart notification (visible across pages) */}
  <CartNotification />
        <motion.main
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {children}
        </motion.main>
        {!isCheckout && <Footer />}
      </motion.div>
    </AnimatePresence>
  );
}