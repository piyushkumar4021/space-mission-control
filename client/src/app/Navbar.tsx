'use client';
import { FaRocket } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import Divider from '../components/divider';

const links = [
  { label: 'Launch', href: '/launch' },
  { label: 'Upcoming', href: '/upcoming' },
  { label: 'History', href: '/history' },
];

export default function App() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className='flex justify-between py-4 text-white'>
        <Link href='/launch' className='flex items-center gap-x-3'>
          <FaRocket size={20} />
          <p className='font-bebas_neue tracking-wider text-xl'>
            SPACE MISSION CONTROL
          </p>
        </Link>

        <nav className='hidden sm:flex gap-8'>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              className={clsx({
                'font-semibold text-blue-600 border-blue-600 border-b-2':
                  pathname === href,
              })}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <Divider />
    </>
  );
}
