"use client";

import React from 'react';

export default function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="min-h-screen overflow-x-hidden">
      {children}
    </body>
  );
}
