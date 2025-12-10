import {
  PaymentFormInputs,
  paymentFormSchema,
  ShippingFormInputs,
  shippingFormSchema,
} from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });
  const router = useRouter();
  const handelPayment: SubmitHandler<PaymentFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handelPayment)}
      className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='cardHolder'
          className='text-sm text-gray-500 font-medium'>
          CardHolder
        </label>
        <input
          className=' border-b border-gray-200 py-2 outline-none text-sm'
          {...register('cardHolder')}
          id='cardHolder'
          placeholder='CardHolder'
        />
        {errors.cardHolder && (
          <p className='text-sm text-red-500'>{errors.cardHolder.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='cardNumber'
          className='text-sm text-gray-500 font-medium'>
          CardNumber
        </label>
        <input
          className=' border-b border-gray-200 py-2 outline-none text-sm'
          {...register('cardNumber')}
          id='cardNumber'
          placeholder='123456789'
        />
        {errors.cardNumber && (
          <p className='text-sm text-red-500'>{errors.cardNumber.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='expirationDate'
          className='text-sm text-gray-500 font-medium'>
          ExpirationDate
        </label>
        <input
          className=' border-b border-gray-200 py-2 outline-none text-sm'
          {...register('expirationDate')}
          id='expirationDate'
          placeholder='12/12'
        />
        {errors.expirationDate && (
          <p className='text-sm text-red-500'>
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='cvv'
          className='text-sm text-gray-500 font-medium'>
          CVV
        </label>
        <input
          className=' border-b border-gray-200 py-2 outline-none text-sm'
          {...register('cvv')}
          id='cvv'
          placeholder='123'
        />
        {errors.cvv && (
          <p className='text-sm text-red-500'>{errors.cvv.message}</p>
        )}
      </div>
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
      <button
        type='submit'
        className='w-full flex mt-4 items-center justify-center gap-2 bg-gray-800 text-white cursor-pointer rounded-lg p-2 hover:bg-gray-900'>
        Continue
        <ArrowRight className='w-3 h-3' />
      </button>
    </form>
  );
}
