const btn = document.querySelector(".btnSubmit");
const expUl = document.querySelector(".exp-ul");
const incUl = document.querySelector(".inc-ul");


const budgetSum = document.querySelector(".budget-title");
const budgetHeadlineInc = document.querySelector(".budget-income");
const budgetHeadlineOut = document.querySelector(".budget-outcome");

let sumTotal = null;
let expTotal = null;
let incTotal = null;

btn.addEventListener("click", (x) => {
let desc = document.querySelector(".input_desc").value;
let value = document.querySelector(".input_value").value;
let type = document.querySelector(".type").value


   if(type === "inc") {
    incTotal += parseInt(value);
    sumTotal += parseInt(value);
    budgetHeadlineInc.innerHTML = incTotal;
    budgetSum.innerHTML = sumTotal
    let li = document.createElement("li");
    li.innerHTML = `Description: ${desc} was: ${value}₪`
    incUl.appendChild(li);
   }
   else {
    expTotal -= parseInt(value);
    sumTotal -= parseInt(value);
    budgetHeadlineOut.innerHTML = expTotal;
    let li = document.createElement("li");
    li.innerHTML = `Description: ${desc} was: ${value - value * 2}₪`
    expUl.appendChild(li);
   }    
   budgetSum.innerHTML = `${sumTotal}₪`;    
})
