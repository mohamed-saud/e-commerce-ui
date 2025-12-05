'use client';

import { useState } from 'react';
import { ProductType } from '@/types';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: ProductType }) {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  function handelProductType({
    type,
    value,
  }: {
    type: 'size' | 'color';
    value: string;
  }) {
    setProductType((state) => ({ ...state, [type]: value }));
  }

  return (
    <div className=' shadow-lg rounded-lg overflow-hidden flex flex-col '>
      <Link href={`product/${product.id}`}>
        <div className=' relative aspect-[2/3]'>
          <Image
            className=' object-cover hover:scale-105 transition-all duration-300'
            src={product.images[productType.color]}
            alt={product.name}
            fill
            sizes='(widht:100% hight:100%)'
            priority
          />
        </div>
      </Link>
      {/* PRODUDUCT DITELS  */}
      <div className=' overflow-hidden relative z-10 bg-white flex items-start   flex-col gap-4 p-4 '>
        <h1 className=' font-semibold'>{product.name}</h1>
        <p className='text-sm text-gray-500'>{product.shortDescription}</p>
        {/* PRODUCT TYPES  */}
        <div className=' flex items-center gap-4 text-sm'>
          {/* SIZES  */}
          <div className=' flex flex-col gap-2'>
            <span className='text-gray-500'>Sizes:</span>
            <select
              onChange={(e) =>
                handelProductType({
                  type: 'size',
                  value: e.target.value.toLowerCase(),
                })
              }
              className=' ring ring-gray-500 rounded-md px-2 py-1'
              name='sizes'
              id='sizes'>
              {product.sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>
          {/* COLORS */}
          <div className=' flex  flex-col gap-2 text-sm'>
            <span className='text-gray-500'>Colors:</span>
            <div className='flex gap-2 items-center '>
              {product.colors.map((color) => (
                <div
                  onClick={(e) =>
                    handelProductType({
                      type: 'color',
                      value: color.toLowerCase(),
                    })
                  }
                  key={color}
                  style={{ backgroundColor: color }}
                  className={`w-7 h-7 rounded-full cursor-pointer border-3 ${
                    color === productType.color
                      ? ' border-gray-600 '
                      : 'border-gray-200'
                  }`}></div>
              ))}
            </div>
          </div>
        </div>
        {/* PRICE AND ADD TO CART BUTTON  */}
        <div className='flex items-center w-full justify-between gap-4'>
          <p className='text-xl font-semibold'>${product.price}</p>
          <button className='ring ring-gray-200 text-black shadow-lg py-2 px-4 rounded-md text-sm cursor-pointer hover:bg-black hover:text-white flex items-center gap-1'>
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
