var distanceTraveled = function (mainTank, additionalTank) {
  for (let i = 0; i < Math.floor(mainTank / 5); i++) {
    if (additionalTank !== 0) {
      mainTank++;
      additionalTank--;
    }
  }
  return mainTank * 10;
};

console.log(distanceTraveled(14, 1));

// https://leetcode.com/problems/total-distance-traveled/