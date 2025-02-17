'use client';
import { FaRocket } from 'react-icons/fa6';
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@heroui/react';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Launch', href: '/launch' },
  { label: 'Upcoming', href: '/upcoming' },
  { label: 'History', href: '/history' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <FaRocket size={20} />
          <p className='font-bebas_neue tracking-wider text-xl ml-3 text-inherit'>
            SPACE MISSION CONTROL
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
        {links.map(({ href, label }) => (
          <NavbarItem key={href}>
            <Link
              color={pathname === href ? 'primary' : 'foreground'}
              href={href}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className='flex sm:hidden' justify='end'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>

      <NavbarMenu>
        {links.map(({ href, label }) => (
          <NavbarMenuItem key={href}>
            <Link
              color={pathname === href ? 'primary' : 'foreground'}
              href={href}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
