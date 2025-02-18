import { ReactNode } from 'react';

export default function H2({ children }: { children: ReactNode }) {
  return (
    <h1 className='tracking-wide text-3xl sm:text-4xl font-bold'>{children}</h1>
  );
}
