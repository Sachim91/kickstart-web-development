//randering initial stage of program
let state = {
  balance : 0,
  income :12000 ,
  expense:2000,
  transections: [
    {name:'Salary',amount:50000,type:'income'},
    {name:'Buy Rrocery',amount:5000,type:'expense'},
    {name:'Buy Guitar',amount:500,type:'expense'}
  ], 
}

//taking inputs from html file
let balanceEl = document.querySelector('.balance');
let incomeEl = document.querySelector('#income');
let expenseEl = document.querySelector('#expence');
let transectionsEl = document.querySelector('#transection')
let incomeBtnEl = document.querySelector('#incomeBtn');
let expenseBtnEl = document.querySelector('#expenceBtn');
let nameInputEl = document.querySelector('#name');
let amountInputEl = document.querySelector('#amount');


function init(){
  updateState();
  inLishners();
  
  


}
function inLishners(){
  incomeBtnEl.addEventListener('click',onAddIncomeClick);
  expenseBtnEl.addEventListener('click',onAddExpenseClick);

}


function onAddIncomeClick(){
  addTransaction(nameInputEl.value,amountInputEl.value,'income');
}

function addTransaction(name,amount,type){
  
  if(name !==''&&amount !==''){
  let transection= {
    name:name,
    amount: parseInt(amount),
    type:type
  }
  state.transections.push(transection);

  updateState();
} else {
  alert('please enter valid data');
}
nameInputEl.value = '';
amountInputEl.value = '';

}
function onAddExpenseClick() {
 addTransaction(nameInputEl.value,amountInputEl.value,'expense')
}
function updateState(){
let balance = 0,
income = 0,
expense = 0,
item;
for(let i = 0;i<state.transections.length;i++){
  item = state.transections[i];
  if(item.type==='income'){
    income +=item.amount;
  }else if(item.type==='expense'){ 
    expense+=item.amount;
  }
}
balance = income-expense;
console.log(balance,income,expense);
state.balance = balance ;
state.income = income;
state.expense = expense;
render();

}



function render(){

  balanceEl.innerHTML = `$${state.balance}`;
  incomeEl.innerHTML = `$${state.income}`;
  expenseEl.innerHTML = `$${state.expense}`;
  
  //creating li for transection history
  let transectionEl,containerEl,amountEl,item;

  transectionsEl.innerHTML = '';
  
  for(let i = 0; i < state.transections.length; i++){
         item = state.transections[i];
       transectionEl = document.createElement('li');
       transectionEl.append(item.name);
     
      transectionsEl.appendChild(transectionEl);
  
     containerEl = document.createElement('div');
     amountEl = document.createElement('span');
     if(item.type ==='income'){
      amountEl.classList.add('income-amt');
     }else if(item.type ==='expense'){
      amountEl.classList.add('expense-amt');
     }
     amountEl.innerHTML = `$${item.amount}`;
     
  
     containerEl.appendChild(amountEl);
  
     btnEl = document.createElement('button');
     btnEl.innerHTML = 'X';
     containerEl.appendChild(btnEl);
     transectionEl.appendChild(containerEl);
    }     
  }

init();
