'use client';
import { Locked } from 'components/shared/Badge';
import { Disclosure } from '@headlessui/react';
import { RiArrowDownSLine } from 'react-icons/ri';

import TypeIcon from 'components/shared/TypeIcon';
import ResourceType from 'components/shared/ResourceType';
const CourseContent = ({ fullCourseContent }) => {
  const curriculum = fullCourseContent.course_curriculum.resources;
  // console.log(curriculum);

  return (
    <section className=" bg-cloud">
      <div className="m-auto max-w-5xl px-4 py-12">
        <h2 className="mb-7 text-2xl font-semibold md:mb-10 md:text-32px">Course Content</h2>
        <div>
          {curriculum.map((section, index) =>
            section.resource_type == 1 ? (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`mt-4 flex w-full items-center justify-between rounded-xl bg-white px-6 py-5 font-semibold shadow-md shadow-mist ${
                        open && 'rounded-b-none'
                      }`}>
                      <h3 className="text-left text-base sm:text-xl">{section.section_name}</h3>
                      <RiArrowDownSLine
                        size={20}
                        className={`${open ? 'rotate-180 transform' : ''} text-black`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="space-y-4 rounded-b-lg bg-white px-6 py-4 text-xs md:text-base">
                      {section.resources.map((material, index) => (
                        <div key={index}>
                          <div className="flex flex-row items-center">
                            <Locked free={material.freepreview} />
                            <h3 className="mr-auto font-semibold text-primary">
                              {material.material_name
                                ? material.material_name
                                : material.exercise_name}
                            </h3>
                            <TypeIcon type={material.type} />
                          </div>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ) : (
              <ResourceType resourceTypeID={section.resource_type} resource={section} key={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
