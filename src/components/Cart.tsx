'use client';

import { CartItemsType } from '@/types';
import { ArrowRight, Trash, Trash2, TrashIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import { useState } from 'react';
import Image from 'next/image';
import useCartStore from '@/stores/cartStore';

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
    selectedColor: 'green',
  },
];
export default function Cart() {
  const { cart, removeFromCart } = useCartStore();
  const searchParam = useSearchParams();
  const route = useRouter();
  const [isShippingForm, setIsShippingForm] = useState(null);
  const activeStep = parseInt(searchParam.get('step') || '1');
  return (
    <div className='flex flex-col items-center justify-center pt-12 gap-8'>
      {/* Title  */}
      <h1 className='text-3xl font-semibold'>Your Shopping Cart</h1>
      {/* Steps  */}
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
        {steps.map((step) => (
          <div
            className={` flex gap-4 items-center border-b-2 pb-4 ${
              activeStep === step.id ? 'border-gray-800' : 'border-gray-200'
            }`}
            key={step.id}>
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-medium ${
                activeStep === step.id ? ' bg-gray-800' : 'bg-gray-200'
              } `}>
              {step.id}
            </div>
            <p
              className={`${
                activeStep === step.id ? ' text-gray-900' : 'text-gray-400'
              }`}>
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* Steps & details  */}
      <div className='w-full flex flex-col lg:flex-row gap-16'>
        {/* steps  */}
        <div className=' w-full lg:w-7/12 border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 shadow-lg'>
          {/* SHIPPING CART  */}
          {activeStep === 1 ? (
            <div>
              <h2 className='font-semibold text-lg'>Cart Items</h2>
              {cart?.map((item) => (
                // SINGLE CART ITEM
                <div
                  key={item.id}
                  className='flex items-center justify-between'>
                  <div className='flex items-center gap-8'>
                    {/* PRODUCT IMAGE  */}
                    <div className=' relative  w-32 h-32 bg-gray-50 rounded-lg overflow-hidden'>
                      <Image
                        alt={item.shortDescription}
                        src={item.images[item.selectedColor]}
                        fill
                        className=' object-contain'
                      />
                    </div>
                    {/* PRODUCT DETAILS  */}

                    <div className='flex flex-col gap-1'>
                      <h2 className='text-gray-900 font-semibold text-sm'>
                        {item.name}
                      </h2>
                      <p className='text-gray-500 font-semibold text-xs'>
                        Quantity: {item.quantity}
                      </p>
                      <p className='text-gray-500 font-semibold text-xs'>
                        Size: {item.selectedSize}
                      </p>
                      <p className='text-gray-500 font-semibold text-xs'>
                        Color: {item.selectedColor}
                      </p>
                      <p className='text-gray-900 mt-2 font-semibold text-sm'>
                        Size: {item.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item)}
                    className='flex items-center bg-red-100 w-8 h-8 justify-center rounded-full text-red-600 cursor-pointer hover:bg-red-200'>
                    <Trash2 className=' w-4 h-4 ' />
                  </button>
                </div>
              ))}
            </div>
          ) : activeStep === 2 ? (
            //  SHIPPING ADDRESS
            <ShippingForm setIsShippingForm={setIsShippingForm} />
          ) : // PAYMENT METHOD
          activeStep === 3 && isShippingForm ? (
            <PaymentForm />
          ) : (
            <p>Error</p>
          )}
          {}
        </div>
        {/* details  */}
        <div className=' border-1 w-full h-max lg:w-5/12 border-gray-100 p-8 rounded-lg flex flex-col gap-8 shadow-lg'>
          <h2 className='font-semibold text-sm'>Cart Detalis</h2>
          <div className=' flex flex-col gap-4'>
            {/* SUBTOTAL -----------------------------  */}
            <div className='flex items-center justify-between text-sm font-medium '>
              <p className='  text-gray-500'>Subtotal</p>
              <p className=''>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            {/* DISCOUNT -----------------------------  */}

            <div className='flex items-center justify-between text-sm font-medium '>
              <p className='  text-gray-500'>Disccount(10)</p>
              <p className=' text-red-500'>$ 10</p>
            </div>
            {/* SHIPPING FREE -----------------------------  */}

            <div className='flex items-center justify-between text-sm font-medium '>
              <p className='  text-gray-500'>Shepping Free</p>
              <p className=''>$10</p>
            </div>
            {/* TOTAL  -----------------------------   */}

            <div className='flex items-center justify-between text-sm font-semibold pt-4 border-t-2 border-gray-200 '>
              <p className='  text-gray-900'>Total</p>
              <p className=''>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {/* CONTINUE BUTTON  -----------------------------   */}

          {activeStep === 1 && (
            <button
              onClick={() =>
                route.push(`/cart?step=${activeStep === 1 && activeStep + 1}`, {
                  scroll: false,
                })
              }
              className='w-full flex items-center justify-center gap-2 bg-gray-800 text-white cursor-pointer rounded-lg p-2 hover:bg-gray-900'>
              Continue
              <ArrowRight className='w-3 h-3' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
