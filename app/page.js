'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    // Use window.location for GitHub Pages basePath compatibility
    const basePath = process.env.NODE_ENV === 'production' ? '/saleemwesite' : '';
    window.location.href = `${basePath}/ro/`;
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div>
        <h2>Redirecting...</h2>
        <p>Loading construction website...</p>
      </div>
    </div>
  );
}
