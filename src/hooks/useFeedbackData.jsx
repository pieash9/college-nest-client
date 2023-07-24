import axios from "axios";
import { useQuery } from "react-query";

const useFeedbackData = () => {
  const {
    data: feedbacks = [],
    refetch,
    isLoading,
  } = useQuery("feedback", async () => {
    const res = await axios.get(
      `https://college-nest-server.vercel.app/feedback`
    );
    return res?.data;
  });

  return { feedbacks, refetch, isLoading };
};

export default useFeedbackData;
