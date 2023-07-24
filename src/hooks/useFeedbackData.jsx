import axios from "axios";
import { useQuery } from "react-query";

const useFeedbackData = () => {
  const {
    data: feedbacks = [],
    refetch,
    isLoading,
  } = useQuery(["feedback"], async () => {
    const res = await axios.get(`http://localhost:5000/feedback`);
    return res?.data;
  });

  return { feedbacks, refetch, isLoading };
};

export default useFeedbackData;
