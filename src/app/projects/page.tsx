'use client';

import Link from 'next/link';
import MobileNav from '@/components/MobileNav';

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-12 py-16 md:py-24 font-sans bg-cream">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-serif lowercase text-dark-grey">
          what i have been building
        </h1>

        <p className="text-lg text-dark-grey">
          still mixing pieces together — these projects are in progress, slowly but surely 🍓🍵
        </p>

        <div className="inline-flex items-center gap-2 bg-light-pink/60 text-dark-pink text-sm px-3 py-1 rounded-full animate-pulse w-fit">
          🧪 early stage — but full of intention
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Project 1 */}
          <div className="p-6 border border-dashed border-matcha/40 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-medium text-dark-grey lowercase">Spring petals</h3>
            <p className="text-sm text-gray-500 mt-2">
               building a friendly AI space to discover flower symbolism, create vision board, and share with your local community.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-6 border border-dashed border-matcha/40 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-medium text-dark-grey lowercase">Crookie app</h3>
            <p className="text-sm text-gray-500 mt-2">
             a cozy, minimalistic app for bringing my recipes and baking adventures into your kitchen — complete with AI-crafted images.
            </p>
          </div>

        </div>
      </div>
      {/* Right nav (desktop) */}
        <div className="hidden md:flex items-center">
          <nav className="flex flex-col space-y-6 text-lg text-gray-700">
            <Link href="/">about</Link>
            <Link href="/projects">projects</Link>
            <Link href="/explore">explore</Link>
            <Link href="/contact">contact</Link>
          </nav>
        </div>
      </main>
<div className="pt-6">
  <MobileNav />
</div>

    </>
  );
}
