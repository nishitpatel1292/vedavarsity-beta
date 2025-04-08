'use client';
import { Certify } from 'components/shared/Badge';
import { isCertificateAvailableID } from 'data/tags';
import { findTagValue } from 'utils/parse';
import { useEffect, useState } from 'react';
import Price from 'components/shared/Price';
import { useParams } from 'next/navigation';
import SectionTitle from '../shared/SectionTitle';

const Hero = ({title}) => {

  return (
    <section className=" bg-[#124356d1] bg-hero-pattern bg-cover bg-no-repeat bg-blend-multiply">
      <div className="flex justify-center items-center min-h-[60vh] px-4 py-12 ">
        <div className="max-w-[800px] space-y-6 uppercase">
          <SectionTitle title={title} background='dark'/>
          {/* {courseDetails.bundle.bundle_description && (
            <p className="text-white ">{courseDetails.bundle.bundle_description}</p>
          )} */}
          {/* {courseDetails.tutors.map((tutor, index) => (
            <p className="font-semibold text-white" key={index}>
              By {tutor.tutor_name}
            </p>
          ))} */}

          {/* <div className="flex items-center space-x-4">
            {courseDetails.bundle.package_cost_set == 1 && <Price geoPrice={geoPrice} />}

            {findTagValue(courseDetails.tags, isCertificateAvailableID) == 'true' ? (
              <Certify />
            ) : null}
          </div> */}

          {/* {courseDetails.bundle.package_cost_set == 1 && (
            <a
              href={`${process.env.NEXT_PUBLIC_INST_URL}/course/${id}/checkout`}
              className={`inline-block w-full rounded-md  bg-primary px-9 py-2 text-center font-semibold capitalize text-white ring-2
            ring-primary hover:bg-[#266ED2] md:w-auto course-landing-buy_${courseDetails.bundle.institution_bundle_id}`}
              data-instbundleid={courseDetails.bundle.institution_bundle_id}>
              Enroll Now
            </a>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
