'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SubscribeForm = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data, e) => {
    setLoading(true);
    fetch('https://api.sendinblue.com/v3/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.NEXT_PUBLIC_SENDINBLUE_KEY
      },
      body: JSON.stringify({
        attributes: {
          FIRSTNAME: data.username,
          SMS: `+${data.code}${data.phone}`
        },
        listIds: [15],
        updateEnabled: false,
        email: data.email
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code) {
          toast.error(data.code.split('_').join(' '));
        } else {
          toast.success('Successfully Subscribed');
          e.target.reset();
        }
        setLoading(false);
      })
      .catch(() => {
        toast.error('Please check your network');
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md  space-y-6 bg-white p-6 shadow-xl md:w-[70%]">
      <h3 className="text-center text-2xl font-extrabold text-[#002B4E]">
        Subscribe to our magazine
        <div className={`mx-auto mt-2 h-0.5 w-20 ${'bg-[#0a3254]'} `}></div>
      </h3>
      <p className="text-center text-sm text-gray-600">Do not wait, join us today.</p>

      {/* Username */}
      <input
        type="text"
        placeholder="Username *"
        className="w-full rounded-md border border-gray-300 p-3 font-medium outline-none focus:border-[#002B4E]"
        required
        {...register('username')}
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email *"
        className="w-full rounded-md border border-gray-300 p-3 font-medium outline-none focus:border-[#002B4E]"
        required
        {...register('email')}
      />

      {/* Phone */}
      <div className="relative flex w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          +
        </div>
        <input
          type="number"
          placeholder="Code"
          className="w-1/4 rounded-l-md border border-r-0 border-gray-300 p-3 pl-7 text-sm font-medium outline-none focus:border-[#002B4E]"
          required
          {...register('code')}
        />
        <input
          type="number"
          placeholder="Phone *"
          className="w-3/4 rounded-r-md border border-gray-300 p-3 font-medium outline-none focus:border-[#002B4E]"
          required
          {...register('phone')}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-sm bg-[#002B4E] px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90 ${
          loading && 'animate-pulse'
        }`}>
        {loading ? 'Sending...' : 'GET IT NOW'}
      </button>
    </form>
  );
};

export default SubscribeForm;
