import AdmissionCard from "../../components/Card/AdmissionCard";
import Loader from "../../components/Loader/Loader";
import SectionTitle from "../../components/Title/SectionTitle";
import useCollegesData from "../../hooks/useCollegesData";

const Admission = () => {
  const { colleges, isLoading } = useCollegesData();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mb-10 mt-5">
      <SectionTitle
        Ftitle={"Admission"}
        Ltitle={"Details"}
        subTitle={"Unlock Your Potential: Begin Your Journey Today"}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
        {colleges.length > 0 &&
          colleges.map((college) => (
            <AdmissionCard key={college._id} college={college} />
          ))}
      </div>
    </div>
  );
};

export default Admission;
