import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useAppliedCollegeData = () => {
  const { user } = useAuth();
  const {
    data: appliedColleges = [],
    refetch,
    isLoading,
  } = useQuery(["colleges", user?.email], async () => {
    const res = await axios.get(
      `http://localhost:5000/appliedCollege/${user?.email}`
    );
    return res.data;
  });

  return { appliedColleges, refetch, isLoading };
};
export default useAppliedCollegeData;
