import React from 'react';

const SubscribeTitle = () => {
  return (
    <div className="space-y-8">
      <p className="text-lg font-bold text-primary">Read, Live and Inspire</p>
      <h3 className="lg:text-34px text-28px font-bold">
        Inspire and Elevate yourself every fortnight
      </h3>
      <p className={'text-justify'}>
        This E-Magazine, Nityam Bhāgavata-Sevayā presents the motive of Śrīmad-Bhāgavatam along with
        the commentaries of great Acharyas like Śrīla Viśvanātha Cakravarti Ṭhākura, Śrīla
        Bhaktivinoda Ṭhākura, Śrīla Bhakti Siddhānta Saraswati and A.C. Bhaktivedanta Swami Srila
        Prabhupada.
      </p>
      {/* <OutLink
        href="https://vedavarsity.com/emag-21/"
        className="inline-block rounded-md bg-primary  py-2 px-9 text-center font-semibold capitalize text-white ring-2 ring-primary hover:bg-[#266ED2]"
      >
        Read Magazines
      </OutLink> */}
    </div>
  );
};

export default SubscribeTitle;
