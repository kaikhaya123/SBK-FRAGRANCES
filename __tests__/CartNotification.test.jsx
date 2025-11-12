import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartProvider } from '../app/context/CartContext';
import CartNotification from '../app/components/CartNotification';

describe('CartNotification component', () => {
  it('renders nothing when no notification', () => {
    render(
      <CartProvider>
        <CartNotification />
      </CartProvider>
    );

    // Notification not visible
    const dismiss = screen.queryByText(/Dismiss/i);
    expect(dismiss).toBeNull();
  });
});
