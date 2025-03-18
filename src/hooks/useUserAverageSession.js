import { useEffect, useState } from "react";
import { fetchUserAverageSession } from "../services/api";

export function useUserAverageSession(userId) {
  const [userAverageSession, setUserAverageSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userAverageSession = await fetchUserAverageSession(userId);
        setUserAverageSession(userAverageSession);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return { userAverageSession, loading, error };
}
