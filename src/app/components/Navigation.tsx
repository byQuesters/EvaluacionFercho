'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/home', label: 'Inicio' },
    { href: '/tema', label: 'Tema' },
    { href: '/cv', label: 'CV' },
    { href: '/accesibilidad', label: 'Accesibilidad' },
  ];

  return (
    <nav className="nav-component" role="navigation" aria-label="Navegación principal">
      <ul className="nav-menu">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${
                pathname === href ? 'active' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
