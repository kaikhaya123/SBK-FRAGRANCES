'use client';
import React, { useState } from 'react';

// Lightweight cache manager UI for dev / admin use.
// - Clears the Service Worker caches
// - Unregisters service workers
// - Clears browser Cache Storage entries
// - Optionally clears localStorage/sessionStorage
// - Reloads the page

export default function CacheManager({ hideAfter = false }) {
  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState('');

  async function clearCaches({ clearStorage = false } = {}) {
    setRunning(true);
    setMessage('Clearing caches...');

    try {
      // 1) Try to unregister any service workers
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        for (const reg of regs) {
          try { await reg.unregister(); } catch (e) { /* ignore */ }
        }
        // Send a message to the active worker to skip waiting if present (best effort)
        if (navigator.serviceWorker.controller) {
          try {
            navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
          } catch (e) { /* ignore */ }
        }
      }

      // 2) Clear Cache Storage entries (the caches[] used by service worker and other code)
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }

      // 3) Optionally clear local/session storage
      if (clearStorage) {
        try { localStorage.clear(); } catch (e) {}
        try { sessionStorage.clear(); } catch (e) {}
      }

      setMessage('Done — reloading');
      // Give the browser a moment to settle, then reload
      setTimeout(() => {
        // Hard reload to bypass any remaining caches
        window.location.reload(true);
      }, 400);
    } catch (err) {
      console.error('CacheManager error:', err);
      setMessage('Error clearing caches — see console');
    } finally {
      setRunning(false);
    }
  }

  return (
    <div style={{ position: 'fixed', right: 18, bottom: 18, zIndex: 9999 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', background: 'rgba(255,255,255,0.92)', padding: '8px 10px', borderRadius: 10, boxShadow: '0 6px 18px rgba(0,0,0,0.08)', fontSize: 13 }}>
        <button
          type="button"
          onClick={() => clearCaches({ clearStorage: false })}
          disabled={running}
          aria-label="Clear site caches"
          style={{ background: '#111', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 8, cursor: 'pointer' }}
        >
          {running ? 'Clearing...' : 'Clear Site Cache'}
        </button>

        <button
          type="button"
          onClick={() => clearCaches({ clearStorage: true })}
          disabled={running}
          aria-label="Clear site caches and storage"
          style={{ background: '#fff', color: '#111', border: '1px solid #e5e7eb', padding: '8px 12px', borderRadius: 8, cursor: 'pointer' }}
        >
          {running ? 'Clearing...' : 'Clear + Storage'}
        </button>

        {message ? <div style={{ color: '#333', paddingLeft: 6 }}>{message}</div> : null}
      </div>
    </div>
  );
}
