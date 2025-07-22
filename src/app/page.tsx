export default function Home() {
  return (
    <main className="min-h-screen flex justify-between items-center p-12 font-sans">
      {/* Left content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-serif lowercase">hana pham</h1>
        <p className="text-lg text-gray-600">
          third-year service analyst with deep experience across tech operations – including data, development, security, and networking. now transitioning into QA and platform engineering.
        </p>
        <p className="text-lg text-gray-600">
          i bring curiosity, precision, and a strong user-focus to every project — with a growing interest in building smarter, AI-enhanced experiences.
        </p>
        <p className="text-lg text-gray-600">
          having a strong belief in learning by building, actively seeking collaboration with developers and creatives to build meaningful tools and sharpen each other’s skills
        </p>
      </div>

      {/* Right nav buttons */}
      <nav className="flex flex-col space-y-6 text-lg text-gray-700">
        <a href="#about" className="hover:underline">about</a>
        <a href="#project" className="hover:underline">project</a>
        <a href="#explore" className="hover:underline">explore</a>
        <a href="#contact" className="hover:underline">contact</a>
      </nav>
    </main>
  );
}

