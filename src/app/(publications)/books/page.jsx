'use client';
import { BookSection } from 'components/books/BookSection';
import Layout from 'components/Layout';
import Hero from 'components/listing/Hero';
import { books, lang } from 'data/books';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Books = () => {
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
          FIRSTNAME: data.firstname,
          LASTNAME: data.lastname,
          SMS: `+${data.code}${data.phone}`,
          ADDRESS: data.address,
          BOOK: data.book,
          QUANTITY: data.quantity,
          PINCODE: data.pincode,
          CITY: data.city
        },
        listIds: [27],
        updateEnabled: true,
        email: data.email
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code) {
          toast.error(data.code.split('_').join(' '));
          setLoading(false);
        } else {
          toast.success('Successfully Sent');
          e.target.reset();
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(`Please check your network ${err}`);
        setLoading(false);
      });
  };
  return (
    <>
      <Hero
        searchBased="Books"
        small={true}
        className={'bg-bottom'}
        subTitle={
          'Read from our collection of Hindi and English books. For bulk purchase please contact us.'
        }
        hideSearch={true}
      />
      <section className="bg-darkcloud bg-pattern">
        <div className="m-auto max-w-6xl space-y-[120px] px-4 py-16">
          <BookSection category={lang.en} title="English Books" />
          <BookSection category={lang.hi} title="Hindi Books" />

          <div className="shadow-[0_16px_32x_0px_rgba(233, 238, 242, 0.7)] flex  flex-col gap-12  rounded-lg bg-white p-8 md:flex-row">
            <div className="flex-1">
              <h4 className="text-3xl font-bold text-navy">Want to purchase books in bulk?</h4>
              <p className="text-navy-40 mt-2 text-lg">
                Fill this form if you want to order any book in bulk. We will get in touch with you
                soon.{' '}
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col gap-2">
              <div className="flex gap-2">
                <label
                  htmlFor={'firstname'}
                  className="block flex-1 font-semibold capitalize"
                  key={'firstname'}>
                  <input
                    type={'text'}
                    name={'firstname'}
                    id={'firstname'}
                    placeholder={`First Name`}
                    className="block w-full rounded-md border-2 border-black p-2 font-medium outline-none focus:border-primary "
                    required
                    {...register('firstname')}
                  />
                </label>
                <label
                  htmlFor={'lastname'}
                  className="block flex-1 font-semibold capitalize"
                  key={'lastname'}>
                  <input
                    type={'text'}
                    name={'lastname'}
                    id={'lastname'}
                    placeholder={`Last Name`}
                    className="block w-full rounded-md border-2 border-black p-2 font-medium outline-none focus:border-primary "
                    required
                    {...register('lastname')}
                  />
                </label>
              </div>
              <label htmlFor={'address'} className="block font-semibold capitalize" key={'address'}>
                <textarea
                  name={'address'}
                  id={'address'}
                  placeholder={`Address`}
                  className="block w-full rounded-md border-2 border-black p-2 font-medium outline-none focus:border-primary "
                  required
                  maxLength={'250'}
                  {...register('address')}
                />
              </label>
              <div className="flex gap-2">
                <label
                  htmlFor={'pincode'}
                  className="block font-semibold capitalize"
                  key={'pincode'}>
                  <input
                    type={'number'}
                    name={'pincode'}
                    id={'pincode'}
                    placeholder={`Pincode`}
                    className="block w-full rounded-md border-2 border-black p-2 font-medium outline-none focus:border-primary "
                    required
                    {...register('pincode')}
                  />
                </label>
                <label
                  htmlFor={'city'}
                  className="block flex-auto font-semibold capitalize"
                  key={'city'}>
                  <input
                    type={'text'}
                    name={'city'}
                    id={'city'}
                    placeholder={`City`}
                    className="block w-full flex-auto rounded-md border-2 border-black p-2 font-medium outline-none focus:border-primary "
                    required
                    {...register('city')}
                  />
                </label>
              </div>
              <div className="flex gap-2">
                <label
                  htmlFor={'book'}
                  className="block flex-auto font-semibold capitalize"
                  key={'book'}>
                  <select
                    name={'book'}
                    id={'book'}
                    className="block h-full w-full rounded-md border-2 border-black p-2 font-medium outline-none focus:border-primary "
                    required
                    {...register('book')}>
                    <option disabled selected>
                      Please select Book
                    </option>
                    {books.map((e) => (
                      <option key={`${e.title}+${e.image}`}>{e.title}</option>
                    ))}
                  </select>
                </label>

                <label
                  htmlFor={'quantity'}
                  className="block min-w-[85px] flex-1 font-semibold capitalize"
                  key={'quantity'}>
                  <input
                    type={'number'}
                    name={'quantity'}
                    id={'quantity'}
                    placeholder={`Quantity`}
                    className="block w-full rounded-md border-2 border-black p-2 font-medium outline-none focus:border-primary "
                    required
                    {...register('quantity')}
                  />
                </label>
              </div>

              <label htmlFor={'email'} className="block font-semibold capitalize" key={'email'}>
                <input
                  type={'email'}
                  name={'email'}
                  id={'email'}
                  placeholder={`Email`}
                  className="block w-full rounded-md border-2 border-black p-2 font-medium outline-none focus:border-primary "
                  required
                  {...register('email')}
                />
              </label>

              <label htmlFor="phone-admin" className="block font-semibold capitalize">
                <div className="relative flex">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    +
                  </div>
                  <input
                    name={'code'}
                    id={'code'}
                    required
                    type="number"
                    className="bg-0 inline-flex w-[22%] appearance-none items-center rounded-l-md border-2 border-r-0 border-black p-2 px-3 pl-7 text-sm font-medium text-gray-900 outline-none focus:border-primary "
                    placeholder="Code"
                    {...register('code')}
                  />
                  <input
                    name={'phone'}
                    id={'phone'}
                    type="number"
                    required
                    className="block w-full min-w-0 flex-1 appearance-none rounded-none rounded-r-lg border-2 border-black p-2 font-medium outline-none focus:border-primary "
                    placeholder="Mobile Number"
                    {...register('phone')}
                  />
                </div>
              </label>

              {/*TODO: implement Loader */}
              <button
                type="submit"
                className={`rounded-md bg-secondary px-8 py-2 font-semibold hover:bg-opacity-90 ${
                  loading && 'animate-pulse'
                }`}
                disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Books;
