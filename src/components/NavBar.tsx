import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <nav>
      {/* LEFT */}
      <Link
        href={'/'}
        className='flex items-center'>
        <Image
          alt='logo'
          src={'/logo.png'}
          width={36}
          height={46}
          className='w-5 h-6 md:w-9 md:h-9'
          priority
        />
        <p className='text-md font-medium tracking-wider'>TRENDLAMA</p>
      </Link>
      {/* RIGHT */}
    </nav>
  );
}
