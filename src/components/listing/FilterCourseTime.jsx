import { Listbox } from '@headlessui/react';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { loadingAtom } from './CourseTabs';
import { coursesAtom } from '@/src/app/(courses)/[title]/page';

const FilterCourseTime = ({  }) => {
  const [isDropdownListOpen, setDropdownListOpen] = useState(false);
  const [timePreference, setTimePreference] = useState('Upcoming');
  const optionLists = [
    { label: 'Upcoming Courses', allCoursesData: upcoming },
    { label: 'Ongoing Courses', allCoursesData: ongoing },
    { label: 'Coming Soon', allCoursesData: comingSoon }
  ];
  const dropdownList = [
    {
      heading: 'Upcoming',
      state: timePreference,
      stateAction: setTimePreference,
      list: optionLists?.map(({ tag_categories_value: item, ...rest }) => ({ item, ...rest }))
    },
  ];


  return (
    <div className="mb-8 ">
      <div className="flex items-center space-x-3">
        <button
          className="flex items-center space-x-2  bg-white px-3 py-2 shadow-md shadow-mist focus:ring-1"
          onClick={() => setDropdownListOpen((open) => !open)}>
          <span>Filters</span>
          <RiArrowDownSLine
            className={`${isDropdownListOpen ? 'rotate-180' : 'rotate-0'} transition`}
          />
        </button>
      </div>
      {isDropdownListOpen && (
        <div className="mt-3 md:flex md:space-x-6">
          {dropdownList.map((dropdown) => (
            <Listbox value={dropdown.state} onChange={dropdown.stateAction} key={dropdown.heading}>
              <div className="relative mt-1 w-48 border-b-2">
                <Listbox.Button className="relative w-full cursor-default rounded-lg py-2 pl-1 pr-10 text-left text-xs">
                  <span className="block truncate">
                    {dropdown.state.item === undefined ? dropdown.heading : dropdown.state.item}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <RiArrowDownSLine size={16} />
                  </span>
                </Listbox.Button>

                <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-b-lg rounded-t-none bg-white py-1 text-xs shadow-md shadow-black/25">
                  {dropdown?.list?.map((each, idx) => (
                    <Listbox.Option
                      key={idx}
                      className={({ active }) =>
                        `${active ? 'bg-gray-100' : ''} relative cursor-default select-none p-3`
                      }
                      value={each}>
                      <span className={`block truncate`}>{each.item}</span>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterCourseTime;
