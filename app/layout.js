// Include the Bootstrap CSS link in your HTML file directly.

// RootLayout.js
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
