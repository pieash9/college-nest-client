/* eslint-disable react/prop-types */

import { useState } from "react";
import AdmissionModal from "../Modal/AdmissionModal";
import useAppliedCollegeData from "../../hooks/useAppliedCollegeData";

const AdmissionCard = ({ college, refetch }) => {
  const { collegeName, collegeImage, admissionDate } = college;
  const [isOpen, setIsOpen] = useState(false); //modal open

  const { appliedColleges } = useAppliedCollegeData();
  //close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 border-gray-300  hover:shadow-2xl duration-500">
      <img
        src={collegeImage}
        alt={collegeName}
        className="h-48 w-full object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        {collegeName}
      </h3>

      <p className="text-gray-500 mb-2">
        <span className="text-gray-600 font-medium">Admission Date: </span>{" "}
        {new Date(admissionDate).toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>

      <button
        disabled={appliedColleges.find(
          (singleAppliedCollege) =>
            singleAppliedCollege.collegeId === college._id
        )}
        onClick={() => setIsOpen(true)}
        className="button-secondary"
      >
        {appliedColleges.find(
          (singleAppliedCollege) =>
            singleAppliedCollege.collegeId === college._id
        )
          ? "Already Applied"
          : "Apply Now"}
      </button>
      <AdmissionModal
        isOpen={isOpen}
        closeModal={closeModal}
        college={college}
        refetch={refetch}
      />
    </div>
  );
};

export default AdmissionCard;
