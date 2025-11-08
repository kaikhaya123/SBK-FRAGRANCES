'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from './Loading';
import { motion, AnimatePresence } from 'framer-motion';

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
        <Navbar className="z-50" />
        <motion.main
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {children}
        </motion.main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}