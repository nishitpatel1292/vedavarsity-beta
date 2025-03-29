import { RiMusicFill, RiImageFill } from 'react-icons/ri';
import { BiVideo, BiLink } from 'react-icons/bi';
import {
  BsFileEarmarkPdf,
  BsFileText,
  BsFileEarmarkWord,
  BsFileEarmarkPpt,
  BsFileEarmarkZip,
  BsYoutube,
  BsVimeo,
  BsCardList
} from 'react-icons/bs';

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

const ALLOWED_AUDIO_TYPES = [
  'audio/mpeg',
  'audio/wav',
  'audio/x-wav',
  //'audio/ogg',
  'audio/mp3'
];

const ALLOWED_VIDEO_TYPES = [
  'video/mp4',
  'video/mpeg',
  'video/webm'
  //'video/ogg'
];

const ALLOWED_DOC_TYPES = ['application/pdf', 'text/plain'];

const ALLOWED_WORD_TYPES = [
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', //docx
  'application/msword', //doc
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel'
];

const ALLOWED_PPT_TYPES = [
  'application/vnd.ms-powerpoint', //ppt
  'application/vnd.openxmlformats-officedocument.presentationml.presentation' //pptx
];

const ALLOWED_ZIP_TYPES = [
  'application/zip',
  'application/vnd.rar',
  'application/x-rar',
  'application/x-zip-compressed'
];

const TypeIcon = ({ type }) => {
  if (ALLOWED_AUDIO_TYPES.includes(type)) {
    return <RiMusicFill color="#F2CC00" />;
  } else if (ALLOWED_IMAGE_TYPES.includes(type)) {
    return <RiImageFill color="#00B5C7" />;
  } else if (ALLOWED_VIDEO_TYPES.includes(type)) {
    return <BiVideo />;
  } else if (type === 'application/pdf') {
    return <BsFileEarmarkPdf color="#F20F00" />;
  } else if (ALLOWED_DOC_TYPES.includes(type)) {
    return <BsFileText />;
  } else if (type === 'external_url' || type === 'link') {
    return <BiLink color="#2D81F7" />;
  } else if (ALLOWED_WORD_TYPES.includes(type)) {
    return <BsFileEarmarkWord color="#4285F4" />;
  } else if (ALLOWED_PPT_TYPES.includes(type)) {
    return <BsFileEarmarkPpt color="#BE3D1D" />;
  } else if (ALLOWED_ZIP_TYPES.includes(type)) {
    return <BsFileEarmarkZip />;
  } else {
    if (type === 'youtube') {
      return <BsYoutube color="#FF0000" />;
    } else if (type === 'vimeo') {
      return <BsVimeo color="#19B1E3" />;
    } else {
      return <BsCardList />;
    }
  }
};

export default TypeIcon;
