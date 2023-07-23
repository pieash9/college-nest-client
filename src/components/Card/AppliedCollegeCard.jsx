/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";
import AddReviewModal from "../Modal/AddReviewModal";
import { useState } from "react";

const AppliedCollegeCard = ({ college, refetch }) => {
  const [isOpen, setIsOpen] = useState(false); //modal open
  //close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  const { createdAt, collegeImage, collegeName } = college;
  return (
    <div className="border rounded-lg shadow-lg hover:shadow-2xl overflow-hidden group  ">
      <img
        src={collegeImage}
        alt={collegeName}
        className="h-48 w-full duration-300 object-cover mb-4 rounded group-hover:scale-105"
      />
      <div className="px-4 pb-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          {collegeName}
        </h3>
        <p className="text-gray-500 mb-2 flex items-center gap-1">
          <span className="text-gray-600 font-medium">College Rating: </span>
          <FaStar className="inline text-yellow-400" />
          {college.collegeRating}/5
        </p>
        <p className="text-gray-500 mb-2 flex items-center gap-1">
          <span className="text-gray-600 font-medium">Subject Name: </span>

          {college.subject}
        </p>
        <p className="text-gray-500 mb-2">
          <span className="text-gray-600 font-medium">Applied Date: </span>{" "}
          {new Date(createdAt).toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <button className="button-secondary">Add a Review</button>
      </div>
      <AddReviewModal
        isOpen={isOpen}
        closeModal={closeModal}
        college={college}
        refetch={refetch}
      />
    </div>
  );
};

export default AppliedCollegeCard;
