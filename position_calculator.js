function calculatePositionSize() {
  let userEstimatedBuyPrice = document.getElementById("userBuyPrice"); //document.getElementById("userEstimatedBuyPrice");
  let positionSizeAccount1 = document.getElementById("positionSizeAccount1");
  let positionSizeAccount2 = document.getElementById("positionSizeAccount2");
  positionSizeAccount1.innerText = Math.floor(
    100.0 / parseFloat(userEstimatedBuyPrice.value)
  );
  positionSizeAccount2.innerText = Math.floor(
    400.0 / parseFloat(userEstimatedBuyPrice.value)
  );
}

let btnCalculateShares = document.getElementById("btnCalculateExitPrices"); //document.getElementById("btnCalculateShares");

btnCalculateShares.addEventListener("click", () => {
  calculatePositionSize();
});
