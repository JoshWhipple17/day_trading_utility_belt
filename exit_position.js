function calculateTakeProfit() {
  const takeProfit5Element = document.getElementById("takeProfit5");
  const takeProfit10Element = document.getElementById("takeProfit10");
  let userBuyPrice = document.getElementById("userBuyPrice");
  takeProfit5Element.innerText = "$" + (parseFloat(userBuyPrice.value) * 1.05).toFixed(4);
  takeProfit10Element.innerText = "$" + (parseFloat(userBuyPrice.value) * 1.1).toFixed(4);
}

function calculateStopLoss() {
  let stopLossElement = document.getElementById("stopLoss");
  let userBuyPrice = document.getElementById("userBuyPrice");
  stopLoss.innerText = "$" + (parseFloat(userBuyPrice.value) * 0.95).toFixed(4);
}

let btnCalculateExits = document.getElementById("btnCalculateExitPrices");

btnCalculateExits.addEventListener("click", () => {
  calculateTakeProfit();
  calculateStopLoss();
});
