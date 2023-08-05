var maxProfit = function (prices) {
  let min = Math.min(...prices);
  let arr = prices.slice(prices.indexOf(min));
  let max = Math.max(...arr);
  return max-min;
};

maxProfit([2,4,1]);
