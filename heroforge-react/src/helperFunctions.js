export const abilityToBonus = (ability) => {
  if(isNaN(ability)) {
    return 0;
  }

  return Math.floor((ability - 10) / 2);
};