'use client';
import useCartStore from '@/stores/cartStore';
import { ProductType } from '@/types';
import { Plus, ShoppingCartIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ProductInteraction({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedColor: string;
  selectedSize: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { addToCart } = useCartStore();
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  function handelAddToCart(product: ProductType) {
    addToCart({
      ...product,
      cartId: Date.now().toString(),
      quantity: 1,
      selectedColor: productType.color,
      selectedSize: productType.size,
    });
    toast.success('Product added to cart');
  }

  function handelProductTypes({
    type,
    value,
  }: {
    type: 'size' | 'color';
    value: string;
  }) {
    setProductType((state) => ({ ...state, [type]: value }));

    const params = new URLSearchParams(searchParams);

    params.set(type, value);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <>
      <h2 className='text-3xl font-semibold text-gray-900 '>{product.name}</h2>
      <h4 className='text-sm font-medium text-gray-400'>
        {product.description}
      </h4>
      <p className='text-3xl font-semibold text-gray-900 '>
        ${product.price.toFixed(2)}
      </p>
      {/* SIZES  */}
      <div className='flex flex-col gap-2'>
        <p className='text-sm font-medium text-gray-400'> Sizes</p>
        <ul className='flex gap-2'>
          {product.sizes.map((size) => (
            <li
              onClick={() => handelProductTypes({ type: 'size', value: size })}
              key={size}
              className={`text-sm font-semibold text-gray-900 border border-gray-900 w-8 h-8 flex items-center justify-center cursor-pointer ${
                selectedSize === size ? 'bg-gray-900 text-white' : ''
              }`}>
              <span>{size}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* colors  */}
      <div className='flex flex-col gap-2'>
        <p className='text-sm font-medium text-gray-400'>Colors</p>
        <ul className='flex gap-2'>
          {product.colors.map((color) => (
            <li
              onClick={() =>
                handelProductTypes({ type: 'color', value: color })
              }
              key={color}
              style={{ backgroundColor: color }}
              className={`text-sm font-semibold border border-gray-200 w-8 h-8 flex items-center justify-center cursor-pointer  ${
                selectedColor === color ? 'border-gray-700 border-2' : ''
              }`}></li>
          ))}
        </ul>
      </div>
      <div className=' flex flex-col gap-4'>
        <button
          onClick={() => handelAddToCart(product)}
          className='flex w-full cursor-pointer hover:bg-gray-950   bg-gray-900 text-white justify-center items-center shadow-md rounded-lg text-md py-2 gap-2'>
          <Plus size={20} />
          Add to Cart
        </button>
        <button className='flex w-full cursor-pointer hover:bg-gray-100  bg-white text-gray-900 border border-gray-200 shadow-md justify-center items-center rounded-lg text-md py-2 gap-2'>
          <ShoppingCartIcon size={20} />
          Buy this Item
        </button>
      </div>
    </>
  );
}
