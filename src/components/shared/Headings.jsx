import React from 'react';
import { InLink } from './Links';
import SparklesText from '@/components/ui/sparkles-text';

export const CategoryHeading = ({ libraryLink, title }) => {
  return (
    <h2 className="mb-3 flex flex-wrap items-center justify-between">
      <span className="text-28px font-bold md:mr-10 lg:text-38px">
        <SparklesText text={title} sparklesCount={5} />
      </span>
      <InLink
        href={libraryLink}
        className="rounded-md  bg-secondary px-8 py-2 font-semibold hover:bg-amber-500">
        View all
      </InLink>
    </h2>
  );
};
