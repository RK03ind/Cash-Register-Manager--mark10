let denominationType = [2000, 500, 100, 20, 10, 5, 1];

let inputLabels = document.querySelectorAll(".input-wrapper label");
let amountInputFields = document.querySelectorAll(".input-wrapper input");
let nextButton = document.querySelector(".next-button");
let calcButton = document.querySelector(".calc-button");
let changeTable = document.querySelector(".cash-change");
let tableDataElements = document.querySelectorAll(".notes-count");

nextButton.addEventListener("click", () => {
  let billAmount = document.querySelector(".bill").value;
  if (!billAmount) return alert("Enter bill amount to proceed");

  //Displaying next input field on next button click
  calcButton.style.display = "block";
  nextButton.style.display = "none";
  amountInputFields[1].style.display = "inline-block";
  inputLabels[1].style.display = "block";
});

//Hiding the table when field value is changed
amountInputFields[0].addEventListener("input", () => {
  if (changeTable.style.display === "table") changeTable.style.display = "none";
});

amountInputFields[1].addEventListener("input", () => {
  if (changeTable.style.display === "table") changeTable.style.display = "none";
});

calcButton.addEventListener("click", () => {
  let billAmount = Number(amountInputFields[0].value);
  let cashGiven = Number(amountInputFields[1].value);

  if (!billAmount || !cashGiven) return alert("Enter Value in both the fields");

  if (!(cashGiven >= billAmount)) return alert("Not enough cash given");

  let remainingBalance = cashGiven - billAmount;

  for (let i = 0; i < 7; i++) {
    let denominationCount = Math.trunc(remainingBalance / denominationType[i]);
    tableDataElements[i].innerText = denominationCount;
    remainingBalance =
      remainingBalance - denominationCount * denominationType[i];
  }

  changeTable.style.display = "table";
});
