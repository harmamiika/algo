// function maxProfit(prices) {
//   let maxProfit = 0;
//   let currentProfit;
//   let buyPointer = 0;
//   let sellPointer = 1;

//   while (buyPointer > prices.length) {
//     if (prices[buyPointer] < prices[sellPointer]) {
//       while (true) {
//         currentProfit = prices[sellPointer] - prices[buyPointer];
//         if (currentProfit <= 0 || sellPointer > prices.length) break;
//         else if (currentProfit > maxProfit) {
//           maxProfit = currentProfit;
//           sellPointer++;
//         }
//       }
//     }
//     buyPointer++;
//     sellPointer = buyPointer + 1;
//   }

//   return maxProfit;
// }

function maxProfit(prices) {
  let l = 0;
  let r = 1;
  let maxP = 0;

  while (r < prices.length) {
    let profit = prices[r] - prices[l];
    if (profit > maxP) maxP = profit;
    else if (profit <= 0) l = r;
    r++;
  }
  return maxP;
}
