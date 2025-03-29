import Image from 'next/image';

const Team = ({ data, title, designation }) => {
  return (
    <div>
      <p className="mb-12 text-3xl font-bold capitalize text-sun">{title}</p>
      <div className="grid grid-cols-1  gap-[58px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((e) => {
          return (
            <div key={e.name}>
              <div className="overflow-hidden rounded aspect-square">
                <Image alt={e.name} src={e.image} layout={'responsive'} />
              </div>
              <p className="mt-4 text-center  text-2xl font-normal text-[#ffffffce]">{e.name}</p>
              {designation && (
                <p className="mt-1 text-center text-xl text-[#ffffff80]">( {e.designation} )</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
