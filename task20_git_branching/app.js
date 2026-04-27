// ============================================================
// Task 20: Git Branching Strategies Demo
// File   : app.js  (main branch — initial version)
// ============================================================

const APP_VERSION = "1.0.0";
const APP_NAME    = "BankingApp";

// ----- Utility helpers -----
function greet(user) {
    return `Welcome to ${APP_NAME}, ${user}!`;
}

function calculateInterest(principal, rate, time) {
    // Simple Interest formula
    return (principal * rate * time) / 100;
}

// ----- Account management -----
function createAccount(owner, balance = 0) {
    return { owner, balance, transactions: [] };
}

function deposit(account, amount) {
    account.balance += amount;
    account.transactions.push({ type: "deposit", amount });
    return account;
}

function withdraw(account, amount) {
    if (amount > account.balance) {
        throw new Error("Insufficient funds");
    }
    account.balance -= amount;
    account.transactions.push({ type: "withdrawal", amount });
    return account;
}

// Export for testing
module.exports = {
    APP_VERSION,
    APP_NAME,
    greet,
    calculateInterest,
    createAccount,
    deposit,
    withdraw
};
