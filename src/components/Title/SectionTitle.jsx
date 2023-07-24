/* eslint-disable react/prop-types */
const SectionTitle = ({ Ftitle, Ltitle, subTitle }) => {
  return (
    <div className="flex gap-5">
      <div className="w-full">
        <h3 className=" text-xl md:text-2xl  text-gray-600 font-medium">
          {Ftitle} <span className="text-orange-500">{Ltitle}</span>
        </h3>

        <div className="flex gap-5 items-baseline">
          <p className="text-gray-500 text-base">{subTitle}</p>
          <div className="border-b md:block hidden flex-1 border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
