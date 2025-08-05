'use client';
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-12 py-16 md:py-24 font-sans">
      {/* Left content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-serif lowercase text-transparent bg-strawberry bg-clip-text bg-[length:200%_200%] animate-gradient-flow">
          hana pham
        </h1>
        <p className="text-lg text-gray-600">
          third-year service analyst with deep experience across tech operations – including data, development, security, and networking. now transitioning into QA and platform engineering.
        </p>
        <p className="text-lg text-gray-600">
          i bring curiosity, precision, and a strong user-focus to every project — with a growing interest in building smarter, AI-enhanced experiences.
        </p>
        <p className="text-lg text-gray-600">
          i build to learn - and seek collaborators who do the same. Connection isn’t sentimental; it’s strategic. The right connectons push the work forward.
        </p>
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
        <nav className="flex justify-center space-x-6 text-base text-gray-700">
          <Link href="/" className="hover:underline">about</Link>
          <Link href="/projects" className="hover:underline">projects</Link>
          <Link href="/explore" className="hover:underline">explore</Link>
          <Link href="/contact" className="hover:underline">contact</Link>
        </nav>
      </div>
    </main>
  );
}
