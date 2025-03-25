"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RegistryPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-8">
      <div className="arc-card p-6 mb-8">
        <h1 className="text-2xl font-bold mb-6">arc_registry</h1>
        <p className="text-gray-300 mb-8">
          the arc registry tracks three types of relationships:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="arc-card p-4">
            <h2 className="font-bold text-white mb-2">projects</h2>
            <p className="text-sm text-gray-300">
              all things built with rig, arc's agent & llm framework
            </p>
          </div>

          <div className="arc-card p-4">
            <h2 className="font-bold text-white mb-2 flex items-center">
              handshakes
              <svg className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <p className="text-sm text-gray-300">
              projects & teams that successfully completed the arc handshake vetting process
            </p>
          </div>

          <div className="arc-card p-4">
            <h2 className="font-bold text-white mb-2">ecosystem_partners</h2>
            <p className="text-sm text-gray-300">
              organizations and infrastructure providers supporting builders in the arc handshake program ecosystem
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        <FilterButton active>all projects</FilterButton>
        <FilterButton>ai_layer</FilterButton>
        <FilterButton>creative</FilterButton>
        <FilterButton>onchain</FilterButton>
        <FilterButton>defi</FilterButton>
        <FilterButton>microcontrollers</FilterButton>
        <FilterButton>handshake</FilterButton>
        <FilterButton>forge</FilterButton>
        <FilterButton>ecosystem_partner</FilterButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProjectCard
          name="soulgraph"
          logo="https://ext.same-assets.com/2137177066/849522504.png"
          description="soulgraph lets you create AI agents that remember and grow through experience—not just process information."
          tags={['token_live', 'AI_layer', 'creative']}
          hasHandshake
        />

        <ProjectCard
          name="listen-rs"
          logo="https://ext.same-assets.com/2137177066/849522504.png"
          description="listen is a rust framework for blockchain actions, focusing on complex defi operations and trading automation."
          tags={['token_live', 'AI_layer', 'onchain', 'defi']}
          hasHandshake
        />

        <ProjectCard
          name="askjimmy"
          logo="https://ext.same-assets.com/2137177066/849522504.png"
          description="the first arc forge launch: jimmy (by askjimmy) as arc forge rolls out."
          tags={['token_live', 'AI_layer', 'onchain', 'defi']}
          hasHandshake
          hasForge
        />

        <ProjectCard
          name="fabelis AI"
          logo="https://ext.same-assets.com/2137177066/849522504.png"
          description="fabelis began as an AI agent framework built on rig.rs to extend its functionality into social media agents, storytelling, narration, and a new platform for open-source collaboration."
          tags={['token_live', 'AI_layer', 'onchain']}
          hasHandshake
        />
      </div>
    </main>
  );
}

interface FilterButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

const FilterButton = ({ children, active }: FilterButtonProps) => {
  return (
    <button
      className={`px-4 py-1.5 text-sm rounded-full whitespace-nowrap ${
        active
          ? 'bg-[#95fa9a] text-black font-medium'
          : 'bg-gray-800/50 text-gray-200 hover:bg-gray-800/80'
      }`}
    >
      {children}
    </button>
  );
};

interface ProjectCardProps {
  name: string;
  logo: string;
  description: string;
  tags: string[];
  hasHandshake?: boolean;
  hasForge?: boolean;
}

const ProjectCard = ({ name, logo, description, tags, hasHandshake, hasForge }: ProjectCardProps) => {
  return (
    <div className="arc-card overflow-hidden">
      <div className="p-5">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-800">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-medium">{name}</h3>
        </div>

        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-gray-800/50 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex border-t border-gray-800">
        {hasHandshake && (
          <button className="flex-1 py-2 text-center text-sm font-medium bg-gray-900 hover:bg-gray-800 text-white">
            handshake
          </button>
        )}

        {hasForge && (
          <button className="flex-1 py-2 text-center text-sm font-medium bg-gray-900 hover:bg-gray-800 text-white border-l border-gray-800">
            forge
          </button>
        )}

        <Link
          href="#"
          className="flex-1 py-2 text-center text-sm text-gray-300 hover:text-white"
        >
          more on handshake
        </Link>
      </div>
    </div>
  );
};
