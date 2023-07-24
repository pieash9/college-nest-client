import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useUsersData = () => {
  const { user } = useAuth();
  const {
    data: userData = [],
    refetch,
    isLoading,
  } = useQuery(
    ["userData", user?.email],
    async () => {
      const res = await axios.get(
        `https://college-nest-server.vercel.app/users/${user?.email}`
      );
      return res?.data;
    },
    {
      // Set the refetchOnMount option to false to prevent initial automatic fetch
      refetchOnMount: false,
      // Add user?.email as a dependency to trigger fetch when it changes
      enabled: !!user?.email,
    }
  );

  return { userData, refetch, isLoading };
};

export default useUsersData;
