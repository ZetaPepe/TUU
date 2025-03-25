"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <SocialLink href="https://x.com/arcdotfun" icon="x">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </SocialLink>
          <SocialLink href="https://t.me/+CI-vivonuApiZWQ0" icon="telegram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M21.5 4.5L2.5 9.5 12 12 15.5 19.5 18 13.5 21.5 4.5Z"></path>
            </svg>
          </SocialLink>
          <SocialLink href="https://dexscreener.com/solana/j3b6dvhes2y1cbmtvz5tcwxnegsjjdbukxduvdpoqms7" icon="dex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </SocialLink>
          <SocialLink href="https://github.com/0xPlaygrounds/rig" icon="github">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </SocialLink>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, children }: { href: string, icon: string, children: React.ReactNode }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#95fa9a] transition-colors duration-200 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/40 hover:bg-gray-800/60"
      aria-label={`Visit Arc on ${icon}`}
    >
      {children}
    </Link>
  );
};

export default Footer;
