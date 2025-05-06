import { useEffect, useState } from "react";
import { fetchUserAverageSessions } from "../services/api";
import { fetchWithFallback } from "../services/fetchWithFallback";
import mockUserAverageSessions from "../mock/userAverageSession.json";

export function useUserAverageSessions(userId) {
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchWithFallback(
      () => fetchUserAverageSessions(userId),
      mockUserAverageSessions
    )
      .then((userAverageSessions) =>
        setUserAverageSessions(userAverageSessions)
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [userId]);

  return { userAverageSessions, error, loading };
}
