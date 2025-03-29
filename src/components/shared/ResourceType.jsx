import { MdOutlineAssignment } from 'react-icons/md';

const RESOURCE_TYPES = {
  SECTION: 1,
  QUIZ: 2,
  ASSIGNMENT: 3,
  MATERIAL: 4,
  EXERCISE: 5
};

const ResourceTitle = ({ title }) => {
  return (
    <div
      className={`mt-4 flex w-full items-center justify-between rounded-xl bg-white px-6 py-5 font-semibold shadow-md shadow-mist`}
    >
      <h3 className="text-left text-base sm:text-xl">{title}</h3>
      <MdOutlineAssignment size={20} className="text-primary" />
    </div>
  );
};

const ResourceType = ({ resourceTypeID, resource }) => {
  if (resourceTypeID == RESOURCE_TYPES.QUIZ) {
    return <ResourceTitle title={resource.quiz_name} />;
  } else if (resourceTypeID == RESOURCE_TYPES.MATERIAL) {
    return <ResourceTitle title={resource.material_name} />;
  } else if (resourceTypeID == RESOURCE_TYPES.EXERCISE) {
    return <ResourceTitle title={resource.exercise_name} />;
  } else {
    return <ResourceTitle title="Assignment" />;
  }
};

export default ResourceType;
