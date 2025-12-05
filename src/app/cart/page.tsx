'use client';

import { CartItemsType } from '@/types';

const steps = [
  { id: 1, title: 'Shopping Cart' },
  { id: 2, title: 'Shopping Address' },
  { id: 3, title: 'Payment Method' },
];
const cartItems: CartItemsType = [
  {
    id: 1,
    name: 'Adidas CoreFit T-Shirt',
    shortDescription:
      'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
    price: 39.9,
    sizes: ['s', 'm', 'l', 'xl', 'xxl'],
    colors: ['gray', 'purple', 'green'],
    images: {
      gray: '/products/1g.png',
      purple: '/products/1p.png',
      green: '/products/1gr.png',
    },
    quantity: 1,
    selectedSize: 'm',
    selectedColor: 'gray',
  },
  {
    id: 2,
    name: 'Puma Ultra Warm Zip',
    shortDescription:
      'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
    price: 59.9,
    sizes: ['s', 'm', 'l', 'xl'],
    colors: ['gray', 'green'],
    images: { gray: '/products/2g.png', green: '/products/2gr.png' },
    quantity: 1,
    selectedSize: 'm',
    selectedColor: 'gray',
  },
  {
    id: 3,
    name: 'Nike Air Essentials Pullover',
    shortDescription:
      'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.',
    price: 69.9,
    sizes: ['s', 'm', 'l'],
    colors: ['green', 'blue', 'black'],
    images: {
      green: '/products/3gr.png',
      blue: '/products/3b.png',
      black: '/products/3bl.png',
    },
    quantity: 1,
    selectedSize: 'm',
    selectedColor: 'gray',
  },
];
export default function page() {
  return (
    <div className='flex items-center justify-center pt-12 gap-8'>
      <h1 className='text-3xl font-semibold'>Your Shopping Cart</h1>
      <div></div>
    </div>
  );
}
