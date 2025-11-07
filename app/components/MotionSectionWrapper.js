"use client";

import dynamic from 'next/dynamic';

const MotionSection = dynamic(
  () => import('framer-motion').then(mod => mod.motion.section),
  { ssr: false }
);

export default function MotionSectionWrapper({ children, ...props }) {
  return <MotionSection {...props}>{children}</MotionSection>;
}