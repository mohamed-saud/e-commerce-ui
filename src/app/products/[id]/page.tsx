import ProductInteraction from '@/components/ProductInteraction';
import { ProductType } from '@/types';
import Image from 'next/image';

const product: ProductType = {
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
};
export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const { size, color } = await searchParams;
  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);

  return (
    <div className=' flex flex-col md:flex-row gap-8 my-8'>
      {/* RIGHT  */}
      <div className='w-full lg:w-5/12  aspect-[2/3]  relative overflow-hidden '>
        <Image
          alt={product.name}
          src={product.images[selectedColor]}
          fill
          className=' object-contain rounded-md'
        />
      </div>
      {/* LEFT  */}
      <div className='flex flex-col gap-8 w-full lg:w-7/12'>
        <ProductInteraction
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />

        <div className='flex gap-2 mt-4 items-center'>
          <Image
            className='rounded-md'
            alt='cards'
            src={'/cards.png'}
            width={50}
            height={25}
          />
          <Image
            className='rounded-md'
            alt='klarna'
            src={'/klarna.png'}
            width={50}
            height={25}
          />
          <Image
            className='rounded-md'
            alt='stripe'
            src={'/stripe.png'}
            width={50}
            height={25}
          />
        </div>
        <p className='text-sm font-medium text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam itaque
          nam nulla harum distinctio iure modi reprehenderit sint, molestias
          alias obcaecati facere nobis eveniet cupiditate suscipit! A at veniam
          fuga.
        </p>
      </div>
    </div>
  );
}
