import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Bell, Home } from 'lucide-react';
import ShoppingCartIcon from './ShoppingCartIcon';

export default function NavBar() {
  return (
    <nav className=' w-full flex justify-between items-center border-b  border-gray-200 pb-4'>
      {/* LEFT */}
      <Link
        href={'/'}
        className='flex items-center'>
        <Image
          alt='logo'
          src={'/logo.png'}
          width={36}
          height={46}
          className='w-auto h-auto md:w-auto md:h-auto'
          priority
        />
        <p className=' hidden md:block text-md font-medium tracking-wider'>
          TRENDLAMA
        </p>
      </Link>
      {/* RIGHT */}

      <div className='flex gap-4 items-center '>
        {/* SEARCH BAR */}
        <SearchBar />
        <Link
          href={'/'}
          className=' text-sm md:text-md font-medium'>
          <Home className='w-4 h-4 text-gray-600' />
        </Link>
        <Link
          href={'/'}
          className=' text-sm md:text-md font-medium'>
          <Bell className='w-4 h-4 text-gray-600' />
        </Link>

        <ShoppingCartIcon />
        <Link
          className=' text-sm md:text-md font-medium'
          href={'/login'}>
          Sing In
        </Link>
      </div>
    </nav>
  );
}
