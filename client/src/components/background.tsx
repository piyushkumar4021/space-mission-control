import Image from 'next/image';

export default function Background() {
  return (
    <Image
      src='/bg.jpg'
      className='absolute -z-50 object-cover'
      fill
      quality={100}
      alt='Space background image'
    />
  );
}
