function calculateDipPercentage() {
    let topOfDip = document.getElementById('topOfDip').value;
    console.log(topOfDip);
    let tenPercent = topOfDip - (topOfDip * .10);
    let twentyPercent = topOfDip - (topOfDip * .20);
    let thirtyPercent = topOfDip - (topOfDip * .30);

    const displayTen = document.getElementById('ten').innerText = "$" + tenPercent.toFixed(4);
    const displayTwenty = document.getElementById('twenty').innerText = "$" + twentyPercent.toFixed(4);
    const displayThirty = document.getElementById('thirty').innerText = "$" + thirtyPercent.toFixed(4);
}

let btnCalculateDipPercentage = document.getElementById("btnCalculateDipPercentage");
  
btnCalculateDipPercentage.addEventListener("click", () => {
    calculateDipPercentage();
});