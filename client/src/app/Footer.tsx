import { Divider } from '@heroui/react';

export default function Footer() {
  return (
    <footer className='mt-auto'>
      <Divider />
      <p className='my-3 text-center text-zinc-600'>
        © 2025 Space Mission Control. All rights reserved. This website is not
        officially affiliated with any organization and is intended for
        educational purposes only.
      </p>
    </footer>
  );
}
