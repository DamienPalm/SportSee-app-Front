import { useEffect, useState } from "react";
import { fetchUserAverageSessions } from "../services/api";

export function useUserAverageSessions(userId) {
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUserAverageSessions(userId)
      .then((userAverageSessions) =>
        setUserAverageSessions(userAverageSessions)
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [userId]);

  return { userAverageSessions, error, loading };
}
