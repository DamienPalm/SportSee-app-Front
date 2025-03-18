import { useEffect, useState } from "react";
import { fetchUserData } from "../services/api";

export function useUserData(userId) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData(userId);
        setUserData(userData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return { userData, loading, error };
}
