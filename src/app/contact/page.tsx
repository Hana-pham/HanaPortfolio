import Link from "next/link";
export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-12 py-16 md:py-24 font-sans">
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-serif lowercase">get in touch</h1>
        <p className="text-lg text-gray-600">
          whether you're a fellow developer, designer, or just curious — i&apos;d love to have a coffee chat (or tea)!
        </p>
        <div className="max-w-xl space-y-1">
          <p className="text-lg text-gray-600">
            email:{" "}
            <a
              href="mailto:the.hanapham@gmail.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              the.hanapham@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-600">
            linkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/hana-pham-601a551b0/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              linkedin/hanapham
            </a>
          </p>
          <p className="text-lg text-gray-600">
            github:{" "}
            <a
              href="https://github.com/Hana-pham"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
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
