const btn = document.querySelector(".btnSubmit");
const expUl = document.querySelector(".exp-ul");
const incUl = document.querySelector(".inc-ul");
// const bot = document.querySelector(".bot")

const budgetSum = document.querySelector(".budget-title");
const budgetHeadlineInc = document.querySelector(".budget-income");
const budgetHeadlineOut = document.querySelector(".budget-outcome");


// holding values:

let sumTotal = null;
let expTotal = null;
let incTotal = null;

let todoId = 0;

// main function:
btn.addEventListener("click", () => {

// getting the values from html:
let desc = document.querySelector(".input_desc").value;
let value = document.querySelector(".input_value").value;
let type = document.querySelector(".type").value

   if(type === "inc") {

    todoId++
    incTotal += parseInt(value);
    sumTotal += parseInt(value);

    budgetHeadlineInc.innerHTML = incTotal;
    budgetSum.innerHTML = sumTotal
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
      li.id = todoId;
      editBtn.className = "editBtn";

  
      // deleting Li, and changing to totalsum + total expenses.
      deleteBtn.onclick = function(id) {
       this.parentNode.remove();
       sumTotal = sumTotal - parseInt(this.parentNode.innerHTML.match(/\d+/)[0]);
       budgetSum.innerHTML = sumTotal
       incTotal = incTotal - parseInt(this.parentNode.innerHTML.match(/\d+/)[0]);
       budgetHeadlineInc.innerHTML = incTotal;
       

      }
      editBtn.innerHTML = `Edit`
      deleteBtn.innerHTML = `Remove`
    li.className = "newLi";
    li.innerHTML = `Description: ${desc} was: ${value}₪`


    desc.innerHTML = ""
    value.innerHTML = ""
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    incUl.appendChild(li);
   }
   else {
      
    expTotal -= parseInt(value);
    sumTotal -= parseInt(value);

    budgetHeadlineOut.innerHTML = expTotal;
    let li = document.createElement("li");
    li.className = "newLi";
    li.innerHTML = `Description:<br/> ${desc} was: ${value - value * 2}₪`

    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");

      li.id = todoId;
      editBtn.className = "editBtn";

      // deleting Li, and changing to totalsum + total expenses.
      deleteBtn.onclick = function(id) {
       this.parentNode.remove();
       sumTotal = sumTotal + parseInt(this.parentNode.innerHTML.match(/\d+/)[0]);
       budgetSum.innerHTML = sumTotal
       expTotal = expTotal + parseInt(this.parentNode.innerHTML.match(/\d+/)[0]);
       budgetHeadlineOut.innerHTML = expTotal;

      }
      
      editBtn.innerHTML = `Edit`
      deleteBtn.innerHTML = `Remove`
    li.className = "newLi";
    li.innerHTML = `Description: ${desc} was: ${value}₪`
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    expUl.appendChild(li);
    
    li.id = todoId;
    todoId++

   }    
   budgetSum.innerHTML = `${sumTotal}₪`; 
   document.querySelector(".input_desc").value = '';
   document.querySelector(".input_value").value = '';
   
})

