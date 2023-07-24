/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const CollegeCard = ({ college }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div
      className={`border bg-white rounded-lg shadow-lg border-gray-300 hover:shadow-2xl duration-500 p-4  ${
        showDetails ? "h-auto" : "h-[435px]"
      }`}
    >
      <img
        src={college.collegeImage}
        alt={college.collegeName}
        className="h-48 w-full object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        {college.collegeName}
      </h3>
      <p className="text-gray-500 mb-2 flex items-center gap-1">
        <span className="text-gray-600 font-medium">College Rating: </span>
         <FaStar className="inline text-yellow-400" />
        {college.collegeRating}/5
      </p>
      <p className="text-gray-500 mb-2">
        <span className="text-gray-600 font-medium">Admission Date: </span>
        {college.admissionDate}
      </p>
      <p className="text-gray-500 mb-2">
        <span className="text-gray-600 font-medium">Number of Research:</span>
        {college.numberOfResearch}
      </p>
      <button className="button-primary mt-4" onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Details"}
      </button>

      {showDetails && (
        <div>
          <h4 className="text-lg font-semibold mt-4">Events:</h4>
          <p className="text-gray-500 mb-4">{college.eventsDetails}</p>

          <h4 className="text-lg font-semibold">Sports Facilities:</h4>
          <ul className="text-gray-500 mb-4">
            {college.researchWorks.map((research, i) => (
              <li key={i}>{research}.</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollegeCard;
