import ProductList from '@/components/ProductList';
import { Suspense } from 'react';

export default function page() {
  return (
    <div className='py-4'>
      <Suspense fallback={<div>Loading ...</div>}>
        <ProductList
          category='all'
          params='productspage'
        />
      </Suspense>
    </div>
  );
}
