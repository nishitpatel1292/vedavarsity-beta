import { Listbox } from '@headlessui/react';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { loadingAtom } from './CourseTabs';
import { coursesAtom } from '@/src/app/(courses)/[title]/page';

const FilterCourse = ({ teachers, categories, languages, title }) => {
  const [isDropdownListOpen, setDropdownListOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const [, setLoading] = useAtom(loadingAtom);
  const [, setCourses] = useAtom(coursesAtom);

  useEffect(() => {
    let filter = [];

    if (selectedLanguage != '') {
      filter.push({ Language: selectedLanguage.item });
    }
    if (selectedCategory != '') {
      filter.push({ Categories: selectedCategory.item });
    }
    if (selectedTeacher != '') {
      setLoading(true);
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1&tutor_ids=${selectedTeacher.tutor_id}`
      )
        .then((res) => res.json())
        .then((result) => {
          setLoading(false);
          setCourses(result);
        });
    }

    if (filter.length > 0) {
      setLoading(true);
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/institute/${
          process.env.NEXT_PUBLIC_INST_ID
        }/courses?get_tutors=1&get_tags=1&get_student_count=1&tag_categories_name_array=${JSON.stringify(
          filter
        )}`
      )
        .then((res) => res.json())
        .then((result) => {
          setLoading(false);
          setCourses(result);
        });
    }
  }, [selectedLanguage, selectedCategory, selectedTeacher]);

  const dropdownList = [
    {
      heading: 'Categories',
      state: selectedCategory,
      stateAction: setSelectedCategory,
      list: categories?.map(({ tag_categories_value: item, ...rest }) => ({ item, ...rest }))
    },
    {
      heading: 'Teachers',
      state: selectedTeacher,
      stateAction: setSelectedTeacher,
      list: teachers?.map(({ tutor_name: item, ...rest }) => ({ item, ...rest }))
    },
    {
      heading: 'Languages',
      state: selectedLanguage,
      stateAction: setSelectedLanguage,
      list: languages?.map(({ tag_categories_value: item, ...rest }) => ({ item, ...rest }))
    }
  ];

  const clearFilter = () => {
    setSelectedCategory('');
    setSelectedTeacher('');
    setSelectedLanguage('');
    setCourses(null);
  };

  return (
    <div className="mb-8 ">
      <div className="flex items-center space-x-3">
        <button
          className="flex items-center space-x-2 rounded-xl bg-white px-3 py-2 shadow-md shadow-mist focus:ring-1"
          onClick={() => setDropdownListOpen((open) => !open)}>
          <span>Filters</span>
          <RiArrowDownSLine
            className={`${isDropdownListOpen ? 'rotate-180' : 'rotate-0'} transition`}
          />
        </button>
        {selectedCategory == '' && selectedTeacher == '' && selectedLanguage == '' ? null : (
          <button className="font-semibold text-[#EB5757]" onClick={clearFilter}>
            Clear all
          </button>
        )}
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

export default FilterCourse;
