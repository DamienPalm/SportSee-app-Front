import { useEffect, useState } from "react";
import { fetchUserPerformance } from "../services/api";

export function useUserPerformance(userId) {
  const [userPerformance, setUserPerformance] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUserPerformance(userId)
      .then((userPerformance) => setUserPerformance(userPerformance))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [userId]);

  return { userPerformance, error, loading };
}
