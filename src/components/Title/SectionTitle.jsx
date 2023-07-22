/* eslint-disable react/prop-types */
const SectionTitle = ({ Ftitle, Ltitle, subTitle }) => {
  return (
    <div className="flex gap-5">
      <div className="w-full">
        <h3 className="text-2xl  text-gray-700 font-medium">
          {Ftitle} <span className="text-orange-500">{Ltitle}</span>
        </h3>
        <p className="text-gray-600">{subTitle}</p>
      </div>
      <div className="border-b  w-full border-gray-300"></div>
    </div>
  );
};

export default SectionTitle;
