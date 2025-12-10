import { ShippingFormInputs, shippingFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function ShippingForm({
  setIsShippingForm,
}: {
  setIsShippingForm: (data: ShippingFormInputs) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });
  const router = useRouter();
  const handelShipping: SubmitHandler<ShippingFormInputs> = (data) => {
    console.log(data);
    router.push(`/cart?step=${3}`, { scroll: false });
    setIsShippingForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handelShipping)}
      className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='name'
          className='text-sm text-gray-500 font-medium'>
          Name
        </label>
        <input
          className=' border-b border-gray-200 py-2 outline-none text-sm'
          {...register('name')}
          id='name'
          placeholder='John Doe'
        />
        {errors.name && (
          <p className='text-sm text-red-500'>{errors.name.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='email'
          className='text-sm text-gray-500 font-medium'>
          Email
        </label>
        <input
          className=' border-b border-gray-200 py-2 outline-none text-sm'
          {...register('email')}
          id='emial'
          placeholder='John.doe@gmail.com'
        />
        {errors.email && (
          <p className='text-sm text-red-500'>{errors.email.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='phone'
          className='text-sm text-gray-500 font-medium'>
          Phone
        </label>
        <input
          className=' border-b border-gray-200 py-2 outline-none text-sm'
          {...register('phone')}
          id='phone'
          placeholder='12356789'
        />
        {errors.phone && (
          <p className='text-sm text-red-500'>{errors.phone.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='address'
          className='text-sm text-gray-500 font-medium'>
          Address
        </label>
        <input
          className=' border-b border-gray-200 py-2 outline-none text-sm'
          {...register('address')}
          id='address'
          placeholder='12 mohamed'
        />
        {errors.address && (
          <p className='text-sm text-red-500'>{errors.address.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='city'
          className='text-sm text-gray-500 font-medium'>
          City
        </label>
        <input
          className=' border-b border-gray-200 py-2 outline-none text-sm'
          {...register('city')}
          id='city'
          placeholder='Egypt'
        />
        {errors.city && (
          <p className='text-sm text-red-500'>{errors.city.message}</p>
        )}
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
