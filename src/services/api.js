export async function fetchUserData(userId) {
  const response = await fetch(`http;//localhost:3000/user/${userId}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données utilisateurs");
  } else {
    return response.json();
  }
}

export async function fetchUserActivity(userId) {
  const response = await fetch(`http;//localhost:3000/user/${userId}/activity`);
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération des données de l'activité des utilisateurs"
    );
  } else {
    return response.json();
  }
}
export async function fetchUserAverageSessions(userId) {
  const response = await fetch(
    `http;//localhost:3000/user/${userId}/average-sessions`
  );
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération des données des sessions moyennes des utilisateurs"
    );
  } else {
    return response.json();
  }
}

export async function fetchUserPerformance(userId) {
  const response = await fetch(
    `http;//localhost:3000/user/${userId}/performance`
  );
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération des données des performances des utilisateurs"
    );
  } else {
    return response.json();
  }
}
