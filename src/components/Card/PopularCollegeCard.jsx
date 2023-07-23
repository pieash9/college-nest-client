/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const PopularCollegeCard = ({ college }) => {
  const {
    _id,
    collegeImage,
    collegeName,
    admissionDate,
    eventsDetails,
    researchWorks,
    sportsCategories,
  } = college;
  return (
    <div className="border rounded-lg shadow-md  h-[530px] group overflow-hidden relative">
      <img
        src={collegeImage}
        alt={collegeName}
        className="h-48 w-full duration-300 object-cover mb-4 rounded group-hover:scale-105"
      />
      <div className="px-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          {collegeName}
        </h3>
        <p className="text-gray-500 mb-2">
          <span className="text-gray-600 font-medium">Admission Dates: </span>{" "}
          {admissionDate}
        </p>
        <p className="text-gray-500 mb-2">
          <span className="text-gray-600 font-medium">Events:</span>{" "}
          {eventsDetails}
        </p>
        <p className="text-gray-500 mb-2">
          <span className="text-gray-600 font-medium">Research History: </span>
          {researchWorks.map((research, i) => (
            <span key={i}> {research},</span>
          ))}
        </p>
        <p className="text-gray-500">
          <span className="text-gray-600 font-medium">Sports: </span>{" "}
          {sportsCategories.map((sport, i) => (
            <span key={i}> {sport},</span>
          ))}
        </p>
        <div className=" mt-2 absolute bottom-4 right-4 w-full">
          {" "}
          <Link to={`/college/details/${_id}`}>
            <button className="button-primary w-full">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCollegeCard;
