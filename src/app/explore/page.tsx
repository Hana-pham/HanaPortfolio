'use client';
import Link from "next/link";
import MobileNav from '@/components/MobileNav';
import React from 'react';

export default function ExplorePage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-12 py-16 md:py-24 font-sans bg-cream">
      
      {/* Left content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-serif lowercase text-dark-grey">
          some articles i found and takeaways
        </h1>

        <p className="text-lg text-dark-grey">
          i’m still sorting through ideas and steeping in what i've been reading — this space will slowly🍓🍵
        </p>

        <div className="inline-flex items-center gap-2 bg-light-pink/60 text-dark-pink text-sm px-3 py-1 rounded-full animate-pulse w-fit">
          🧷 work in progress — reflections loading
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="p-6 border border-dashed border-matcha/40 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-medium text-dark-grey lowercase">
              ai ethics & creative trust
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              a few questions still stirring around consent, authorship, and co-creation — notes to come soon.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border border-dashed border-matcha/40 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-medium text-dark-grey lowercase">
              emotional design in tech
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              exploring interfaces that feel emotionally aware, generous, and a bit whimsical.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border border-dashed border-matcha/40 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-medium text-dark-grey lowercase">
              productivity ≠ self-worth
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              reflecting on the trap of optimization culture and how slowness can also be smart.
            </p>
          </div>
        </div>
      </div>

      {/* Right nav (desktop) */}
      <div className="hidden md:flex items-center">
        <nav className="flex flex-col space-y-6 text-lg text-gray-700">
          <Link href="/" className="hover:underline">about</Link>
          <Link href="/projects" className="hover:underline">projects</Link>
          <Link href="/explore" className="hover:underline">explore</Link>
          <Link href="/contact" className="hover:underline">contact</Link>
        </nav>
      </div>

      {/* Bottom nav (mobile only) */}
      <div className="md:hidden mt-12">
        <MobileNav />
      </div>
    </main>
  );
}
