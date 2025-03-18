import { useEffect, useState } from "react";
import { fetchUserPerformance } from "../services/api";

export function useUserPerformance(userId) {
  const [userPerformance, setUserPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPerformance = await fetchUserPerformance(userId);
        setUserPerformance(userPerformance);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return { userPerformance, loading, error };
}
