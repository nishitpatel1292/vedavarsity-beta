const now = Math.floor(Date.now() / 1000);

const showAllCourseDate = (courses) => {
  courses.map((each) => {
    console.log(
      `${each.bundle_name} - start : ${new Date(
        each.course_start_date * 1000
      ).toDateString()} end : ${new Date(each.course_end_date * 1000).toDateString()}`
    );
  });
};

const categoryTypes = [
  'gita wisdom',
  'history',
  'puranas',
  'after school for kids',
  'parenting',
  'sanskrit',
  'bhakti yoga',
  'lifestyle'
];

export const coursesFilter = (courses) => {
  //   showAllCourseDate(courses);
  const ongoing = courses
    .filter(
      (eachCourse) =>
        eachCourse.course_start_date + 24 * 60 * 60 <= now &&
        eachCourse.course_end_date !== null &&
        eachCourse.course_end_date > now
    )
    .sort((a, b) => b.course_start_date - a.course_start_date);

  const upcoming = courses
    .filter((eachCourse) => eachCourse.course_start_date + 24 * 60 * 60 > now)
    .sort((a, b) => a.course_start_date - b.course_start_date);

  const comingSoon = courses.filter(
    (eachCourse) => eachCourse.course_start_date == null || eachCourse.course_start_date == 0
  );
  const completed = courses
    .filter((eachCourse) => eachCourse.course_end_date < now && eachCourse.course_end_date != 0)
    .sort((a, b) => b.course_end_date - a.course_end_date);

  let categoryMap = {};
  categoryTypes.forEach((type) => {
    const categoryData = courses?.filter((item) => {
      const categoryTag = item?.tags?.find((tag) => tag.label === 'Categories');
      if (categoryTag) {
        const categories = categoryTag.value.map((category) => category.toLowerCase());
        return categories.includes(type);
      }
    });

    categoryMap[type] = categoryData;
  });

  return {
    ongoing,
    upcoming,
    comingSoon,
    completed,
    categoryMap
  };
};
