'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'about', href: '/' },
    { name: 'projects', href: '/projects' },
    { name: 'explore', href: '/explore' },
    { name: 'contact', href: '/contact' },
  ];

  return (
    <div className="md:hidden mt-12 mb-6 flex justify-center">
      <div className="bg-matcha/80 px-4 py-2 rounded-full flex gap-4 backdrop-blur shadow-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? 'bg-light-pink/40 text-cream'
                  : 'text-dark-grey hover:text-white/80'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
