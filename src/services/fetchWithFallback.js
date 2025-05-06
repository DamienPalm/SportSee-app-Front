export async function fetchWithFallback(fetchFn, fallback) {
  try {
    return await fetchFn();
  } catch (error) {
    console.warn(
      "Backend injoignable, utilisation des données mockées.",
      error
    );
    return fallback;
  }
}
