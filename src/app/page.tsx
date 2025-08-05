'use client';

import Link from 'next/link';
import MobileNav from '@/components/MobileNav';

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-12 py-16 md:py-24 font-sans bg-cream">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-serif lowercase text-transparent bg-strawberry bg-clip-text bg-[length:200%_200%] animate-gradient-flow">
            hana pham
          </h1>
          <p className="text-lg text-dark-grey">
            third-year service analyst with deep experience across tech operations — including data, development, security, and networking. now transitioning into QA and platform engineering.
          </p>
          <p className="text-lg text-dark-grey">
            i bring curiosity, precision, and a strong user-focus to every project — with a growing interest in building smarter, AI-enhanced experiences.
          </p>
          <p className="text-lg text-dark-grey">
            i build to learn — and seek collaborators who do the same. connection isn’t sentimental; it’s strategic. the right ones push the work forward.
          </p>
          <div className="inline-flex items-center gap-2 bg-light-pink/60 text-dark-pink text-sm px-3 py-1 rounded-full animate-pulse w-fit">
            🌱 currently evolving — one thoughtful build at a time
          </div>
        </div>

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
