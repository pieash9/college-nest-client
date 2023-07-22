import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/Title/SectionTitle";

const CollegeDetails = () => {
  const college = useLoaderData();
  const {
    collegeImage,
    collegeName,
    admissionDate,
    eventsDetails,
    researchWorks,
    sportsCategories,
  } = college;

  return (
    <div className=" py-8">
      <SectionTitle Ftitle={"Admission Details of"} Ltitle={collegeName} />
      <div className="flex gap-10 bg-white mt-10">
        <div className="md:w-2/5">
          <img
            src={collegeImage}
            alt={collegeName}
            className="h-96 w-full object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold mb-1 text-gray-700">
            {collegeName}
          </h2>
          <p className="text-gray-700 font-medium">
            {" "}
            Admission Date:
            <span className="text-orange-500"> {admissionDate}</span>
          </p>
        </div>
        <div className="md:w-3/5 space-y-3">
          <h3 className="text-xl font-semibold text-gray-700 mb-2 underline">
            Admission Process:
          </h3>
          <div className="">
            <p className="text-gray-700 text-md font-medium">
              Online Application:
            </p>
            <p className="text-gray-600">
              Prospective students are required to fill out an online
              application form on the university s official website. The
              application form collects essential information such as personal
              details, academic history, and desired course of study.
            </p>
          </div>
          <div className="">
            <p className="text-gray-700 text-md font-medium">
              Entrance Examination:{" "}
            </p>
            <p className="text-gray-600">
              After submitting the online application, applicants will be
              notified about the entrance examination schedule. The entrance
              exam is designed to assess the candidate s knowledge, aptitude,
              and skills relevant to their chosen field of study.
            </p>
          </div>
          <div className="">
            <p className="text-gray-700 text-md font-medium">Interview:</p>
            <p className="text-gray-600">
              {" "}
              Shortlisted candidates from the entrance examination will be
              invited for a personal interview with the admission committee. The
              interview aims to evaluate the candidates motivation, aspirations,
              and suitability for the universitys academic environment.
            </p>
          </div>
          <div className="">
            <p className="text-gray-700 text-md font-medium">
              {" "}
              Academic Records Evaluation:{" "}
            </p>
            <p className="text-gray-600">
              The admission committee will carefully review the academic
              records, including previous examination scores and grades, to
              gauge the candidates academic performance and potential.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 ">
              Events Details
            </h3>
            <p className="text-gray-500 mb-4">{eventsDetails}</p>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 ">
                Research Works
              </h3>
              <ul className="text-gray-500 mb-4">
                {researchWorks.map((research, i) => (
                  <li key={i}>{research}.</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 ">
                Sports Categories
              </h3>
              <ul className="text-gray-500 mb-4">
                {sportsCategories.map((sport, i) => (
                  <li key={i}>{sport}.</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
