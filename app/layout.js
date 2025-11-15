import './globals.css';
import './styles/fullpage.css';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import ClientLayout from './components/ClientLayout';
import { CartProvider } from './context/CartContext';

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant'
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
});

export const metadata = {
  title: 'SBK Fragrances',
  description: 'Unveiling the essence of luxury and uniqueness in every scent.',
  icons: {
    icon: '/images/Elegant_SBK_Fragrance_Logo_Design-removebg-preview.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorantGaramond.variable} h-full`}>
      <head>
        {/* Primary Meta Tags */}
        {/* Mobile-friendly viewport: allow pinch-zoom for accessibility */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="SBK Fragrances" />
        <meta property="og:description" content="Bringing to life the fragrance you love" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        
        {/* Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload only truly critical assets to avoid unsupported/unused-preload warnings */}
        <link rel="preload" href="/images/spa-still-life-with-beauty-products.jpg" as="image" type="image/jpeg" />

        {/* NOTE: other large images and videos are not preloaded to avoid
            "unsupported `as` value" and "preload but not used" dev warnings.
            If specific pages require eager preloads, add them only on those pages. */}

        {/* Development-only: early guard for missing selectors used by third-party
            scripts (prevents `querySelector(...).addEventListener` TypeErrors).
            This runs as soon as the head is parsed so injected scripts can't throw
            before React mounts and our client-side guards run. */}
        {process.env.NODE_ENV !== 'production' && (
          <script dangerouslySetInnerHTML={{ __html: `
            (function(){
              try {
                var original = Document.prototype.querySelector;
                Document.prototype.querySelector = function(selector) {
                  try {
                    var res = original.call(this, selector);
                    if (res) return res;

                    // Record missing selector usage (stack trace and selector)
                    try {
                      window.__missingSelectors = window.__missingSelectors || [];
                      window.__missingSelectors.push({ selector: selector, stack: (new Error()).stack, ts: Date.now() });
                      if (window.localStorage) {
                        try { window.localStorage.setItem('__missingSelectors', JSON.stringify(window.__missingSelectors.slice(-50))); } catch(e){}
                      }
                    } catch(e) {}

                    var noop = function(){};
                    return new Proxy({}, {
                      get: function(_, prop) {
                        if (prop === 'addEventListener') return function(){
                          try {
                            window.__missingAddEventListenerCalls = window.__missingAddEventListenerCalls || [];
                            window.__missingAddEventListenerCalls.push({ selector: selector, args: Array.prototype.slice.call(arguments), stack: (new Error()).stack, ts: Date.now() });
                            if (window.localStorage) {
                              try { window.localStorage.setItem('__missingAddEventListenerCalls', JSON.stringify(window.__missingAddEventListenerCalls.slice(-50))); } catch(e){}
                            }
                          } catch(e){}
                        };
                        if (prop === 'removeEventListener') return noop;
                        if (prop === 'classList') return { add: noop, remove: noop, contains: function(){ return false; } };
                        if (prop === 'querySelector') return function(){ return null; };
                        if (prop === 'appendChild' || prop === 'append' || prop === 'remove') return noop;
                        if (prop === 'insertBefore') return function(){
                          try {
                            // record the call for diagnostics
                            window.__missingInsertBeforeCalls = window.__missingInsertBeforeCalls || [];
                            window.__missingInsertBeforeCalls.push({ selector: selector, args: Array.prototype.slice.call(arguments), stack: (new Error()).stack, ts: Date.now() });
                            if (window.localStorage) {
                              try { window.localStorage.setItem('__missingInsertBeforeCalls', JSON.stringify(window.__missingInsertBeforeCalls.slice(-50))); } catch(e){}
                            }
                          } catch(e){}
                          return arguments[0];
                        };
                        if (prop === 'childNodes' || prop === 'children') return [];
                        if (prop === 'firstChild' || prop === 'lastChild') return null;
                        if (prop === 'parentNode') return null;
                        if (prop === 'nodeType') return undefined;
                        if (prop === 'ownerDocument') return typeof document !== 'undefined' ? document : null;
                        return noop;
                      }
                    });
                  } catch (e) {
                    try { return original.call(this, selector); } catch (err) { return null; }
                  }
                };
              } catch (err) {
                // ignore if environment prevents patching
              }
            })();
            // Early guard for Node.insertBefore to avoid "insertBefore is not a function"
            (function(){
              try {
                var origInsertBefore = Node.prototype.insertBefore;
                function isNodeLike(x) {
                  return x === null || (x && typeof x.nodeType === 'number');
                }
                Node.prototype.insertBefore = function (newNode, referenceNode) {
                  try {
                    if (!isNodeLike(referenceNode)) {
                      try {
                        window.__missingInsertBeforeCalls = window.__missingInsertBeforeCalls || [];
                        window.__missingInsertBeforeCalls.push({ args: Array.prototype.slice.call(arguments), stack: (new Error()).stack, ts: Date.now() });
                        if (window.localStorage) {
                          try { window.localStorage.setItem('__missingInsertBeforeCalls', JSON.stringify(window.__missingInsertBeforeCalls.slice(-50))); } catch(e){}
                        }
                      } catch(e){}
                      referenceNode = null;
                    }
                    return origInsertBefore.call(this, newNode, referenceNode);
                  } catch (err) {
                    try { return origInsertBefore.call(this, newNode, null); } catch(e){ throw err; }
                  }
                };
              } catch(err) {
                // ignore
              }
            })();
          ` }} />
        )}

        {/* Development-only: suppress known devtools/style-inject errors to reduce noise */}
        {process.env.NODE_ENV !== 'production' && (
          <script dangerouslySetInnerHTML={{ __html: `
            (function(){
              window.addEventListener('error', function (e) {
                try {
                  var msg = e && e.message ? e.message : '';
                  var file = e && e.filename ? e.filename : '';
                  if (msg.indexOf('insertBefore is not a function') !== -1 && (file.indexOf('devtool-style-inject') !== -1 || file.indexOf('devtools') !== -1)) {
                    try {
                      window.__suppressedDevtoolErrors = window.__suppressedDevtoolErrors || [];
                      window.__suppressedDevtoolErrors.push({ message: msg, filename: file, stack: e.error && e.error.stack ? e.error.stack : (new Error()).stack, ts: Date.now() });
                      if (window.localStorage) {
                        try { window.localStorage.setItem('__suppressedDevtoolErrors', JSON.stringify(window.__suppressedDevtoolErrors.slice(-50))); } catch(err){}
                      }
                    } catch(_){ }
                    e.stopImmediatePropagation && e.stopImmediatePropagation();
                    e.preventDefault && e.preventDefault();
                    return;
                  }
                } catch(err) {}
              }, true);
            })();
          ` }} />
        )}

        {/* Suppress known third-party share-modal runtime error in dev until
            upstream source can be located. This prevents noisy console errors
            from interrupting debugging while we fix the root cause. */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            window.addEventListener('error', function (e) {
              try {
                if (e && e.filename && e.filename.indexOf('share-modal.js') !== -1 && e.message && e.message.indexOf("Cannot read properties of null") !== -1) {
                  try {
                    window.__suppressedShareModalErrors = window.__suppressedShareModalErrors || [];
                    window.__suppressedShareModalErrors.push({ message: e.message, filename: e.filename, stack: e.error && e.error.stack ? e.error.stack : (new Error()).stack, ts: Date.now() });
                    if (window.localStorage) {
                      try { window.localStorage.setItem('__suppressedShareModalErrors', JSON.stringify(window.__suppressedShareModalErrors.slice(-50))); } catch(err){}
                    }
                  } catch(_){}
                  e.stopImmediatePropagation && e.stopImmediatePropagation();
                  e.preventDefault && e.preventDefault();
                  return;
                }
              } catch (err) {
                // ignore any errors in the guard itself
              }
            }, true);
          })();
        ` }} />
        
        {/* PWA meta tags */}
        <meta name="application-name" content="SBK Fragrances" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SBK Fragrances" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* GSAP and ScrollTrigger */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
      </head>
  {/* suppress hydration warnings at the root to avoid mismatches caused by browser extensions */}
  <body suppressHydrationWarning className="min-h-screen bg-white text-gray-900 font-sans">
        <CartProvider>
          <ClientLayout>{children}</ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
