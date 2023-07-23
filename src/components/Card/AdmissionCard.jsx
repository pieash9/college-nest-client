/* eslint-disable react/prop-types */



const AdmissionCard = ({ college }) => {
  const { collegeName, collegeImage, admissionDate } = college;
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
      <button className="button-secondary">Apply Now</button>
    </div>
  );
};

export default AdmissionCard;
