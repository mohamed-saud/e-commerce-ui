import Categories from '@/components/Categories';
import ProductList from '@/components/ProductList';
import React from 'react';

export default function ProductsPage() {
  return (
    <div className='py-4'>
      <ProductList
        category='all'
        params='productspage'
      />
    </div>
  );
}
