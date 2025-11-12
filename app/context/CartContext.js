'use client';

import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState({ visible: false, message: '', item: null });
  const timerRef = useRef(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('sbk-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        setCart([]);
      }
    }
    setIsLoading(false);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('sbk-cart', JSON.stringify(cart));
    }
  }, [cart, isLoading]);

  const addToCart = (fragrance, selectedSize = '55ml') => {
    setCart(prev => {
      const cartItemId = `${fragrance.id}-${selectedSize}`;
      const existingItem = prev.find(item => item.id === cartItemId);
      
      if (existingItem) {
        return prev.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, {
        id: cartItemId,
        fragranceId: fragrance.id,
        name: fragrance.name,
        price: fragrance.price,
        size: selectedSize,
        quantity: 1,
        image: fragrance.image,
        type: fragrance.type
      }];
    });
  };

  // Notification API: show a non-blocking message (auto-dismiss)
  const notify = (message, item = null, duration = 3500) => {
    // clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setNotification({ visible: true, message, item });

    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        setNotification({ visible: false, message: '', item: null });
        timerRef.current = null;
      }, duration);
    }
  };

  const clearNotification = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setNotification({ visible: false, message: '', item: null });
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    
    setCart(prev =>
      prev.map(item =>
        item.id === cartItemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    notification,
    notify,
    clearNotification,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
    isLoading
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
