export const fetchUserData = async (userId) => {
  const response = await fetch(`http://localhost:3000/user/${userId}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données utilisateur");
  } else {
    return response.json();
  }
};

export const fetchUserActivity = async (userId) => {
  const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération de l'activité de l'utilisateur"
    );
  } else {
    return response.json();
  }
};

export const fetchUserAverageSession = async (userId) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération des sessions moyennes de l'utilisateur"
    );
  } else {
    return response.json();
  }
};

export const fetchUserPerformance = async (userId) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  );
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération de la performance de l'utilisateur"
    );
  } else {
    return response.json();
  }
};
