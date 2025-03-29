export const stringToIntParse = (arrayOfTags, tagId) => {
  let tag = arrayOfTags.filter((eachTag) => eachTag.id == tagId);
  let value = tag[0].value[0];

  return value.replace(/\D/g, '');
};
export const findTagValue = (arrayOfTags, tagId) => {
  let tag = arrayOfTags?.filter((eachTag) => eachTag.id == tagId);
  if (tag?.length > 0) {
    let value = tag[0].value[0];
    return value;
  } else {
    return 'N/A';
  }
};

export const extractInstBundleId = (path) => {
  let splitted = path.split('-');

  return splitted[splitted.length - 1];
};
