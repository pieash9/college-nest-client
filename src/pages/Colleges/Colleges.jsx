import CollegeCard from "../../components/Card/CollegeCard";
import Loader from "../../components/Loader/Loader";
import SectionTitle from "../../components/Title/SectionTitle";
import useCollegesData from "../../hooks/useCollegesData";

const Colleges = () => {
  const { colleges, isLoading } = useCollegesData();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mb-10 mt-5">
      <SectionTitle
        Ftitle={"Pursuing Excellence: "}
        Ltitle={"Discover the Best Colleges"}
        subTitle={"Unveiling the Future: Colleges of Excellence"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {colleges.length > 0 &&
          colleges.map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))}
      </div>
    </div>
  );
};

export default Colleges;
