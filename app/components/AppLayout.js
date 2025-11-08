'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AppLayout({ children }) {
  const router = useRouter();

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // Transition configuration
  const pageTransition = {
    type: "tween",
    duration: 0.6
  };

  // Effect to handle smooth scrolling
  useEffect(() => {
    // Add smooth scroll behavior to the html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Reset scroll position on route change
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events?.on('routeChangeComplete', handleRouteChange);

    return () => {
      document.documentElement.style.scrollBehavior = '';
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}