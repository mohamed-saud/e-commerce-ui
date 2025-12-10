import Cart from '@/components/Cart';
import { Suspense } from 'react';

export default function page() {
  return (
    <Suspense fallback={'loading ...'}>
      <Cart />
    </Suspense>
  );
}
