import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-44 md:pb-32 flex flex-col items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-tunnel-effect flex items-center justify-center">
            {/* The Tunnel Effect is created with a series of concentric arches */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute border-t border-l border-r border-gray-200/20 rounded-t-full"
                style={{
                  width: `${(i + 1) * 6}%`,
                  height: `${(i + 1) * 3}%`,
                  top: '50%',
                }}
              />
            ))}
          </div>
        </div>

        {/* Arc Branding */}
        <div className="relative z-10 text-center">
          <h1 className="arc-text-glowing text-[8rem] md:text-[12rem] font-bold leading-none">arc</h1>
          <div className="mt-8 md:mt-16">
            <h2 className="text-lg md:text-2xl text-white/80 italic max-w-lg mx-auto">
              we take the red pill then the blue pill
            </h2>
            <div className="flex justify-center mt-8">
              <Link
                href="/architecture"
                className="flex items-center space-x-2 px-5 py-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all"
              >
                <span>explore the complex</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl text-center mb-10 text-white/80">ecosystem partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo
              name="solana"
              href="https://solana.org/"
              logo="https://ext.same-assets.com/2137177066/849522504.png"
            />
            <PartnerLogo
              name="send ai"
              href="https://www.solanaaihackathon.com/"
              logo="https://ext.same-assets.com/2137177066/849522504.png"
            />
            <PartnerLogo
              name="eternal ai"
              href="https://eternalai.org/"
              logo="https://ext.same-assets.com/2137177066/849522504.png"
            />
            <PartnerLogo
              name="hyperbolic"
              href="https://hyperbolic.xyz/"
              logo="https://ext.same-assets.com/2137177066/849522504.png"
            />
            <PartnerLogo
              name="shuttle dev"
              href="https://www.shuttle.dev/"
              logo="https://ext.same-assets.com/2137177066/849522504.png"
            />
            <PartnerLogo
              name="arbitrum"
              href="https://arbitrum.io/"
              logo="https://ext.same-assets.com/2137177066/849522504.png"
            />
            <PartnerLogo
              name="abstract"
              href="https://abs.xyz/"
              logo="https://ext.same-assets.com/2137177066/849522504.png"
            />
            <PartnerLogo
              name="mongodb"
              href="https://www.mongodb.com/"
              logo="https://ext.same-assets.com/2137177066/849522504.png"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const PartnerLogo = ({ name, href, logo }: { name: string, href: string, logo: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center group"
    >
      <div className="relative h-16 w-16 mb-2">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain transition-transform group-hover:scale-110"
        />
      </div>
      <span className="text-sm text-white/70 group-hover:text-[#95fa9a]">{name}</span>
    </Link>
  );
};
