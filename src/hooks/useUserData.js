import { useEffect, useState } from "react";
import { fetchUserData } from "../services/api.js";
import { fetchWithFallback } from "../services/fetchWithFallback.js";
import mockUserData from "../mock/userData.json";

export function useUserData(userId) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchWithFallback(() => fetchUserData(userId), mockUserData)
      .then((data) => setUserData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [userId]);

  return { userData, error, loading };
}
