"use client";

export default function TestButtonPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <a href="/shop" style={{
        background: '#fff',
        color: '#000',
        padding: '1rem 2rem',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
        textDecoration: 'none',
        border: '2px solid #000',
        cursor: 'pointer',
      }}>
        Test Link
      </a>
    </div>
  );
}
