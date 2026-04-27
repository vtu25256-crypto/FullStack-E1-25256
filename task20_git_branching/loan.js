// ============================================================
// loan.js — Loan Module  (feature/loan-module branch)
// ============================================================

const config = require("./config");

/**
 * Apply for a loan and get EMI details.
 * @param {number} principal  - Loan amount in USD
 * @param {number} annualRate - Annual interest rate (%)
 * @param {number} months     - Loan tenure in months
 */
function applyLoan(principal, annualRate, months) {
    const monthlyRate = annualRate / (12 * 100);
    const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    return {
        principal,
        annualRate,
        months,
        emi: parseFloat(emi.toFixed(2)),
        totalPayment: parseFloat((emi * months).toFixed(2)),
        totalInterest: parseFloat((emi * months - principal).toFixed(2))
    };
}

/**
 * Check loan eligibility based on monthly income.
 */
function checkEligibility(monthlyIncome, requestedAmount) {
    const maxLoan = monthlyIncome * 60; // 60x income cap
    return {
        eligible: requestedAmount <= maxLoan,
        maxLoan,
        message:
            requestedAmount <= maxLoan
                ? "Congratulations! You are eligible for this loan."
                : `Loan amount exceeds your limit of ${config.currency} ${maxLoan}`
    };
}

module.exports = { applyLoan, checkEligibility };
