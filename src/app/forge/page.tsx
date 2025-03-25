"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ForgePage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trading Panel */}
        <div className="arc-card overflow-hidden">
          <div className="p-4 border-b border-gray-800 flex justify-between items-center">
            <h2 className="text-xl font-medium">SOL → AskJ</h2>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sell Panel */}
          <div className="bg-slate-800 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">you sell</span>
              <span className="text-gray-400">balance: 0.0000</span>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="text"
                className="bg-transparent text-3xl font-medium focus:outline-none w-full"
                placeholder="0.0"
                defaultValue="0.0"
              />
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">SOL</Button>
              <Button variant="outline" className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">USDC</Button>
              <Button variant="outline" className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">ARC</Button>
            </div>

            <div className="text-gray-400 mt-2 text-sm">= $0.00</div>
          </div>

          {/* Buy Panel */}
          <div className="bg-slate-700 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">you buy</span>
              <span className="text-gray-400">balance: 0.0000</span>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="text"
                className="bg-transparent text-3xl font-medium focus:outline-none w-full"
                placeholder="0.0"
                defaultValue="0.0"
              />
            </div>

            <Button variant="outline" className="bg-slate-600 text-white border-slate-500 hover:bg-slate-500">AskJ</Button>

            <div className="text-gray-400 mt-2 text-sm">= $0.00</div>
          </div>

          {/* Transaction Details */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <span className="text-gray-400">price impact</span>
              <span className="text-right">0.00%</span>

              <span className="text-gray-400">route</span>
              <span className="text-right">Jupiter (Best Price)</span>

              <span className="text-gray-400">swap fee</span>
              <span className="text-right">0.1%</span>

              <span className="text-gray-400">AskJ price</span>
              <span className="text-right">$0.00374412932</span>
            </div>

            <Button className="w-full mt-6 arc-button-primary">connect wallet</Button>

            <div className="mt-4 flex justify-center">
              <Link
                href="/about-forge"
                className="text-gray-300 hover:text-white text-sm flex items-center"
              >
                about forge →
              </Link>
            </div>
          </div>
        </div>

        {/* Liquidity Distribution Panel */}
        <div className="arc-card overflow-hidden">
          <div className="p-4 border-b border-gray-800">
            <h2 className="text-xl font-medium">liquidity distribution</h2>
          </div>

          <div className="p-6 h-96 flex justify-center items-center">
            <div className="w-full h-full relative">
              <div className="absolute top-0 right-0 flex space-x-2">
                <button className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div className="h-full flex items-center justify-center">
                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Above Value</span>
                    <span className="text-xs text-gray-400">Active Value</span>
                    <span className="text-xs text-gray-400">Below Value</span>
                  </div>

                  <div className="h-48 w-full bg-gray-900 rounded-lg relative">
                    {/* Liquidity Distribution Chart Simulation */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-r from-transparent via-green-400/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-1/2 w-1 h-full bg-blue-500/80"></div>
                    <div className="absolute top-1/4 left-0 right-0 h-12 bg-green-400/20"></div>
                  </div>

                  <div className="mt-4 text-center text-xs text-gray-400">
                    available liquidity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pool Information */}
      <div className="arc-card mt-6 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300">advanced pool information</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-gray-300">
              <span className="text-gray-500 mr-1">total volume:</span>
              <span>$27,823,027.05</span>
            </div>

            <div className="text-gray-300">
              <span className="text-gray-500 mr-1">24h volume:</span>
              <span>$45,022.71</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
