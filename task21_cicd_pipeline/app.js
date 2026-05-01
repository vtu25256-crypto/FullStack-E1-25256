// ============================================================
// Task 20: Git Branching Strategies Demo
// File   : app.js  (main branch — initial version)
// Initial commit for demo
// ============================================================

const APP_VERSION = "2.0.0"; // Resolved conflict: prefer feature branch version
const APP_NAME    = "BankingApp";
const { applyLoan, checkEligibility } = require("./loan");
const { sendTransactionAlert, sendLowBalanceWarning } = require("./notification");

// ----- Utility helpers (Refactored) -----
function greet(user) {
    return `Welcome to ${APP_NAME}, ${user}!`;
}

function login(username, password) {
    console.log(`User ${username} logged in.`);
    return true;
}

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
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
