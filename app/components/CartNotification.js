'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartNotification() {
  const { notification, clearNotification } = useCart();

  return (
    <AnimatePresence>
      {notification?.visible && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="fixed right-6 top-6 z-50 w-full max-w-sm px-2"
        >
          <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-3 flex items-center gap-3">
            {notification.item?.image && (
              <div className="w-12 h-12 flex-shrink-0">
                <img src={notification.item.image} alt={notification.item.name} className="w-12 h-12 object-cover rounded-md" />
              </div>
            )}

            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{notification.message}</p>
              {notification.item && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{notification.item.name}</p>
              )}
              <div className="mt-2 flex items-center gap-2">
                <a href="/checkout" className="text-xs font-semibold text-rose-600 hover:underline">View Cart</a>
                <a href="/shop" className="text-xs text-gray-500 hover:underline">Continue Shopping</a>
              </div>
            </div>

            <button
              onClick={() => clearNotification()}
              className="text-xs text-gray-500 hover:text-gray-700"
              aria-label="Dismiss notification"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
