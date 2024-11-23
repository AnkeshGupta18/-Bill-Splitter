
const billAmountInput = document.querySelector(".bill-amount");
const customTipInput = document.querySelector(".custom-tip");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const generateBtn = document.querySelector(".generate-bill-btn");
const tipAmountOutput = document.querySelector(".tip-amount span");
const totalBillOutput = document.querySelector(".total span");
const EachPersonBillOutput = document.querySelector(".each-person-bill span");
const tipsContainer = document.querySelector(".tip-container");
const resetBtn = document.querySelector(".reset-btn");

 let tipPercentage=0;

generateBtn.addEventListener("click", () =>{
   const billAmount = parseInt(billAmountInput.value);
   const numberOfPeople = parseInt(numberOfPeopleInput.value);
   const tipAmount = billAmount * (tipPercentage / 100);
   const totalBill = billAmount + tipAmount;
   const EachPersonBill = totalBill / numberOfPeople;
   EachPersonBillOutput.innerText = `₹${EachPersonBill}`;
   totalBillOutput.innerText = `₹${totalBill}`;
   tipAmountOutput.innerText = `₹${tipAmount}`;
   resetBtn.disabled = false;
})

tipsContainer.addEventListener("click",(e) =>{
   if(tipsContainer.classList.contains("disabled")) return;
   if(e.target != tipsContainer){
      [...tipsContainer.children].forEach((tip) => tip.classList.remove("selected"));
      e.target.classList.add("selected");
      tipPercentage =  parseInt(e.target.innerText);
      customTipInput.value = "";
   }
})

customTipInput.addEventListener("input",()=>{
   tipPercentage = parseInt(customTipInput.value);
   [...tipsContainer.children].forEach((tip) => tip.classList.remove("selected"));
})

resetBtn.addEventListener("click",()=>{
   tipPercentage = 0;
   billAmountInput.value = "";
   numberOfPeopleInput.value = "";
   customTipInput.value = "";
   EachPersonBillOutput.innerText ="" ;
   totalBillOutput.innerText = "";
   tipAmountOutput.innerText = "";
   [...tipsContainer.children].forEach((tip) => tip.classList.remove("selected"));
   
   generateBtn.disabled = true;
   resetBtn.disabled = true;
})

billAmountInput.addEventListener("input",()=>{
   if(billAmountInput.value){
      customTipInput.disabled = false;
      numberOfPeopleInput.disabled = false;
      tipsContainer.classList.remove("disabled");
   }
   else{
      customTipInput.disabled = true;
      numberOfPeopleInput.disabled = true;
      tipsContainer.classList.add("disabled");
   }
})

numberOfPeopleInput.addEventListener("input",()=>{
   if(numberOfPeopleInput.value){

      generateBtn.disabled = false;
   }
   else{
      generateBtn.disabled = true;
   }
})