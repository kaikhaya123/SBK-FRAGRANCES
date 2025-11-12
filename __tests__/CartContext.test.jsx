import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { CartProvider, useCart } from '../app/context/CartContext';

// Small test component that exposes notify on window for testing
function TestComp() {
  const { notify, notification } = useCart();

  React.useEffect(() => {
    // expose for test
    // eslint-disable-next-line no-undef
    window.__notify = notify;
    return () => {
      // eslint-disable-next-line no-undef
      delete window.__notify;
    };
  }, [notify]);

  return <div data-testid="notif">{notification.message}</div>;
}

describe('CartContext notification API', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('notify sets notification and auto-dismisses', () => {
    render(
      <CartProvider>
        <TestComp />
      </CartProvider>
    );

    act(() => {
      // call the exposed notify
      // eslint-disable-next-line no-undef
      window.__notify('Test message', { id: 1, name: 'Test' }, 3000);
    });

    // message should be visible immediately
    expect(screen.getByTestId('notif').textContent).toBe('Test message');

    // advance timers to auto-dismiss
    act(() => {
      jest.advanceTimersByTime(3100);
    });

    // after dismiss, message should be empty
    expect(screen.getByTestId('notif').textContent).toBe('');
  });
});
