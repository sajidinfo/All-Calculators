// expenseTracker.js
class ExpenseTracker {
    constructor() {
        this.expenses = [];
    }

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    }

    getTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2);
    }

    getExpenseReport() {
        return this.expenses.map(expense => `Description: ${expense.description}, Amount: ₹${expense.amount}`).join('\n');
    }
}

// Example usage
const expenseTracker = new ExpenseTracker();
expenseTracker.addExpense('Groceries', 3000);
expenseTracker.addExpense('Electricity Bill', 1500);
expenseTracker.addExpense('Internet Bill', 800);

console.log('Total expenses: ₹' + expenseTracker.getTotalExpenses());
console.log('Expense report:');
console.log(expenseTracker.getExpenseReport());
