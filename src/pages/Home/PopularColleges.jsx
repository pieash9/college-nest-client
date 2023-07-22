import PopularCollegeCard from "../../components/Card/PopularCollegeCard";
import Loader from "../../components/Loader/Loader";
import SectionTitle from "../../components/Title/SectionTitle";
import useCollegesData from "../../hooks/useCollegesData";

const PopularColleges = () => {
  const { colleges, isLoading } = useCollegesData();

  if (isLoading) {
    <Loader />;
  }
  return (
    <div>
      <SectionTitle
        Ftitle={"Popular"}
        Ltitle={"Colleges"}
        subTitle={"Transforming Futures: Where Dreams Take Flight!"}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
        {colleges.length > 0 &&
          colleges
            .slice(0, 3)
            .map((college) => (
              <PopularCollegeCard key={college._id} college={college} />
            ))}
      </div>
    </div>
  );
};

export default PopularColleges;
