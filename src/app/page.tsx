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
            i work at the intersection of automation, APIs, and system reliability, with 3+ years of experience making complex systems faster and more reliable — from cutting process delays by 85% to keeping 900+ locations running at 99.9% uptime.
          </p>
          <p className="text-lg text-dark-grey">
            i’m now moving deeper into software engineering, focusing on AI-powered applications and API testing. I like building things that work every time, whether it’s a feature for an internal team or a public-facing app like <span className="font-semibold">SpringPetals</span>.
          </p>
          <p className="text-lg text-dark-grey">
            my toolkit includes JavaScript (Next.js, React), Python, SQL, Playwright, Postman, Supabase, and CI/CD with GitHub Actions. I deploy fast, test thoroughly, and care about getting the details right.
          </p>
          <p className="text-lg text-dark-grey">
            i’m looking for opportunities where I can help build reliable, scalable products with a team that values precision and impact.
          </p>
          <div className="inline-flex items-center gap-2 bg-light-pink/60 text-dark-pink text-sm px-3 py-1 rounded-full animate-pulse w-fit">
            🌱 always learning — one thoughtful build at a time
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
