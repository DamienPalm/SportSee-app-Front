export function formatUserData(data) {
  const score = data.score || data.todayScore || 0;

  return {
    id: data.id,
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
    score,
    scoreData: [{ name: "score", value: score }],
    keyData: {
      calories: data.keyData.calorieCount,
      proteins: data.keyData.proteinCount,
      carbohydrates: data.keyData.carbohydrateCount,
      lipids: data.keyData.lipidCount,
    },
  };
}
