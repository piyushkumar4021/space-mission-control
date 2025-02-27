import { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className='p-5 my-3 rounded-lg bg-zinc-300/85 max-w-screen-lg mx-auto'>
      {children}
    </section>
  );
}
