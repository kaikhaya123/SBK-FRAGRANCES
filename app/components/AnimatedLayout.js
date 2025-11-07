"use client";
import React from 'react';
import { useGsapAnimation } from '../hooks/useGsapAnimation';

export default function AnimatedLayout({ children }) {
  useGsapAnimation();

  return (
    <div className="relative">
      {children}
    </div>
  );
}