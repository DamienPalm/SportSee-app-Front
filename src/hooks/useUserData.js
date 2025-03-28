import { useEffect, useState } from "react";
import { fetchUserData } from "../services/api.js";

export function useUserData(userId) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUserData(userId)
      .then((userData) => setUserData(userData))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [userId]);

  return { userData, error, loading };
}
