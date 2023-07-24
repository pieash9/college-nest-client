import axios from "axios";
import { useQuery } from "react-query";

const useCollegesData = () => {
  const {
    data: colleges = [],
    refetch,
    isLoading,
  } = useQuery("colleges", async () => {
    const res = await axios.get(`http://localhost:5000/colleges`);
    return res?.data;
  });

  return { colleges, isLoading, refetch };
};

export default useCollegesData;
