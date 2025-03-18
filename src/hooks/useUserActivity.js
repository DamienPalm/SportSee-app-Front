import { useEffect, useState } from "react";
import { fetchUserActivity } from "../services/api";

export function useUserActivity(userId) {
  const [userActivity, setUserActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userActivity = await fetchUserActivity(userId);
        setUserActivity(userActivity);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return { userActivity, loading, error };
}
