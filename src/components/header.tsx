"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black/10 backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/arc-logo.svg"
            alt="Arc Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        <NavLink href="/registry">registry</NavLink>
        <NavLink href="/forge">forge</NavLink>
        <NavLink href="/handshake">handshake</NavLink>
        <div className="relative group">
          <NavLink href="#">the complex</NavLink>
          <div className="absolute left-0 mt-2 w-40 hidden group-hover:block">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <NavLink href="/manifesto" className="py-2 px-4 block">manifesto</NavLink>
              <NavLink href="/architecture" className="py-2 px-4 block">architecture</NavLink>
              <NavLink href="/tokenomics" className="py-2 px-4 block">tokenomics</NavLink>
            </div>
          </div>
        </div>
        <div className="relative group">
          <NavLink href="#">experiments</NavLink>
          <div className="absolute left-0 mt-2 w-40 hidden group-hover:block">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <NavLink href="/emblem" className="py-2 px-4 block">emblem</NavLink>
              <div className="py-2 px-4 text-gray-400">ragtag (coming soon)</div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center space-x-4">
        <Button variant="outline" className="text-white bg-black/40 border-slate-700 rounded-full text-sm hover:bg-black/60">
          select wallet
        </Button>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

const NavLink = ({ href, className, children }: { href: string, className?: string, children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className={`text-gray-200 hover:text-[#95fa9a] transition-colors duration-200 text-sm ${className || ''}`}
    >
      {children}
    </Link>
  );
};

export default Header;
