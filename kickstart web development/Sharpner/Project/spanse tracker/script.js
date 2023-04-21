const form = document.querySelector("form");
const expenseNameInput = document.querySelector("#expense-name");
const expenseAmountInput = document.querySelector("#expense-amount");
const expenseTable = document.querySelector("#expense-table");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Add expenses from local storage to the table
expenses.forEach(expense => {
  addExpenseToTable(expense);
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const expenseName = expenseNameInput.value;
  const expenseAmount = expenseAmountInput.value;

  if (!expenseName || !expenseAmount) {
    alert("Please enter a name and amount for the expense.");
    return;
  }

  const expense = { name: expenseName, amount: expenseAmount };
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  addExpenseToTable(expense);

  expenseNameInput.value = "";
  expenseAmountInput.value = "";
  

});

function addExpenseToTable(expense) {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = expense.name;
  row.appendChild(nameCell);

  const amountCell = document.createElement("td");
  amountCell.textContent = expense.amount;
  row.appendChild(amountCell);

  const actionsCell = document.createElement("td");

  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.textContent = "Edit";
  actionsCell.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  actionsCell.appendChild(deleteButton);

  row.appendChild(actionsCell);

  expenseTable.appendChild(row);

  editButton.addEventListener("click", function() {
    // Show the edit form
    document.querySelector("#edit-form").style.display = "block";
    
    // populate the input fields with the current expense data
    const newExpenseNameInput = document.querySelector("#expense-name");
    const newExpenseAmountInput = document.querySelector("#expense-amount");
    newExpenseNameInput.value = expense.name;
    newExpenseAmountInput.value = expense.amount;
    
    // Add event listener for the form submit button
    document.querySelector("#edit-form").addEventListener("submit", function(event) {
      event.preventDefault();
      // Update the expense in the expenses array
      expense.name = newExpenseNameInput.value;
      expense.amount = newExpenseAmountInput.value;
      localStorage.setItem("expenses", JSON.stringify(expenses));
      // Update the table
      nameCell.textContent = expense.name;
      amountCell.textContent = expense.amount;
      document.querySelector("#edit-form").style.display = "none";
    });
  });
  


  editButton.addEventListener("click", function() {
    const newExpenseName = window.prompt("Enter the new expense name", expense.name);
    const newExpenseAmount = window.prompt("Enter the new expense amount", expense.amount);
  
    if (!newExpenseName || !newExpenseAmount) {
      alert("Please enter a valid name and amount for the expense.");
      return;
    }
  
    // Update the expense in the expenses array
    const index = expenses.indexOf(expense);
    expenses[index] = { name: newExpenseName, amount: newExpenseAmount };
    localStorage.setItem("expenses", JSON.stringify(expenses));
  
    // Update the table
    nameCell.textContent = newExpenseName;
    amountCell.textContent = newExpenseAmount;
  });
  
  

  deleteButton.addEventListener("click", function() {
    const index = expenses.indexOf(expense);
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    row.remove();
  });
}
