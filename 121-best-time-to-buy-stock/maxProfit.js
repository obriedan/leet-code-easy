const maxProfit = (prices) => {
  let maxProfit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      let profit = prices[i] - min;
      maxProfit = profit > maxProfit ? profit : maxProfit;
    }
  }
  return maxProfit;
};

const example1 = [7, 1, 5, 3, 6, 4];
const example2 = [7, 6, 4, 3, 1];
const example3 = [1, 2, 4, 7, 11];

maxProfit(example3);

var maxProfit1 = function (prices) {
  let maxProfit = 0;
  let min = prices[0];

  for (let j = 1; j < prices.length; j++) {
    if (prices[j] < min) {
      min = prices[j];
    } else {
      let profit = prices[j] - min;
      maxProfit = profit > maxProfit ? profit : maxProfit;
    }
  }

  return maxProfit;
};

maxProfit1(example3);
