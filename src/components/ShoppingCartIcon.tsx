'use client';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ShoppingCartIcon({
  cartNumber,
}: {
  cartNumber?: number;
}) {
  return (
    <Link
      href={'/cart'}
      className=' text-sm md:text-md font-medium relative'>
      <span className=' absolute -top-2 -right-2 bg-yellow-500 w-4 h-4 flex items-center justify-center text-center rounded-full text-white'>
        {cartNumber ? cartNumber : 0}
      </span>
      <ShoppingCart className='w-4 h-4 text-gray-600' />
    </Link>
  );
}
