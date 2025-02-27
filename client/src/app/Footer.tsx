import Divider from '../components/divider';

export default function Footer() {
  return (
    <>
      <div className='mt-auto'>
        <Divider />
        <footer>
          <p className='text-xs sm:text-base my-3 text-center text-zinc-600'>
            © 2025 Space Mission Control. All rights reserved. This website is
            not officially affiliated with any organization and is intended for
            educational purposes only.
          </p>
        </footer>
      </div>
    </>
  );
}
