import AppliedCollegeCard from "../../components/Card/AppliedCollegeCard";
import Loader from "../../components/Loader/Loader";
import SectionTitle from "../../components/Title/SectionTitle";
import useAppliedCollegeData from "../../hooks/useAppliedCollegeData";
import useAuth from "../../hooks/useAuth";

const MyCollege = () => {
  const { loading } = useAuth();
  const { appliedColleges, refetch, isLoading } = useAppliedCollegeData();
  if (isLoading || loading) {
    return <Loader />;
  }
  return (
    <div className="mb-10 mt-5">
      <SectionTitle
        Ftitle={"Applied"}
        Ltitle={"Colleges"}
        subTitle={"List of colleges to which you have applied"}
      />
      <div className="gird grid-cols-1 md:grid-cols-3">
        {appliedColleges.length > 0 &&
          appliedColleges.map((college) => (
            <AppliedCollegeCard key={college._id} college={college} />
          ))}
      </div>
    </div>
  );
};

export default MyCollege;
