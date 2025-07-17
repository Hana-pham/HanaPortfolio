import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white text-black p-8 sm:p-20 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center gap-8 text-center max-w-3xl">
        <h1 className="text-5xl font-bold">Hana Pham</h1>
        <p className="text-xl text-gray-600">
           Quality Analyst | Platform Developer | Creative Designer
        </p>
        <p className="text-base text-gray-700">
          Welcome to my personal portfolio. 
        </p>

        <div className="flex gap-6 mt-6">
          <a
            href="#projects"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-black px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </main>

      <footer className="mt-20 text-center text-sm text-gray-500">
        <p>
          Built with Next.js • Deployed on Vercel • © {new Date().getFullYear()} Hana Pham
        </p>
      </footer>
    </div>
  );
}
