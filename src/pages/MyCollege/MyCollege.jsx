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
    <div className="mb-10 mt-5 mx-3 lg:mx-0">
      <SectionTitle
        Ftitle={"Applied"}
        Ltitle={"Colleges"}
        subTitle={"List of colleges to which you have applied"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {appliedColleges.length > 0 &&
          appliedColleges.map((college) => (
            <AppliedCollegeCard
              key={college._id}
              college={college}
              refetch={refetch}
            />
          ))}
      </div>
    </div>
  );
};

export default MyCollege;
