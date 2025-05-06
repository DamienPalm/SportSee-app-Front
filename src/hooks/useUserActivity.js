import { useEffect, useState } from "react";
import { fetchUserActivity } from "../services/api";
import { fetchWithFallback } from "../services/fetchWithFallback";
import mockUserActivity from "../mock/userActivity.json";

export function useUserActivity(userId) {
  const [userActivity, setUserActivity] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchWithFallback(() => fetchUserActivity(userId), mockUserActivity)
      .then((userActivity) => setUserActivity(userActivity))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [userId]);

  return { userActivity, error, loading };
}
