'use client';
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-12 py-16 md:py-24 font-sans bg-cream">
      
      {/* Left content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-serif lowercase text-dark-grey">
          get in touch
        </h1>

        <p className="text-lg text-dark-grey">
          whether you're a fellow dev, creative, or just curious — i'd love to chat over coffee, code, or maybe some matcha 🍵
        </p>

        <div className="inline-flex items-center gap-2 bg-light-pink/60 text-dark-pink text-sm px-3 py-1 rounded-full animate-pulse w-fit">
          💌 always open for conversation 
        </div>

        <div className="mt-6 space-y-3">
          <p className="text-lg text-dark-grey">
            email:{" "}
            <a
              href="mailto:the.hanapham@gmail.com"
              className="underline decoration-dark-pink hover:text-dark-pink transition-colors"
            >
              the.hanapham@gmail.com
            </a>
          </p>
          <p className="text-lg text-dark-grey">
            linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/hana-pham-601a551b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dark-pink hover:text-dark-pink transition-colors"
            >
              linkedin.com/in/hana-pham
            </a>
          </p>
          <p className="text-lg text-dark-grey">
            github:{" "}
            <a
              href="https://github.com/Hana-pham"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dark-pink hover:text-dark-pink transition-colors"
            >
              github.com/hana-pham
            </a>
          </p>
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
