// ============================================================
// notification.js — Notification Service (feature/notification-service)
// ============================================================

const NOTIFICATION_TYPES = {
    SMS:   "SMS",
    EMAIL: "EMAIL",
    PUSH:  "PUSH"
};

/**
 * Send a transaction alert to the account holder.
 * @param {string} type    - Notification channel (SMS/EMAIL/PUSH)
 * @param {string} user    - Recipient username
 * @param {object} txn     - Transaction details { type, amount }
 */
function sendTransactionAlert(type, user, txn) {
    const message = txn.type === "deposit"
        ? `Hi ${user}, your account has been credited with $${txn.amount}.`
        : `Hi ${user}, your account has been debited by $${txn.amount}.`;

    return {
        channel: type,
        recipient: user,
        message,
        timestamp: new Date().toISOString(),
        status: "SENT"
    };
}

/**
 * Send a low-balance warning when balance falls below threshold.
 */
function sendLowBalanceWarning(user, balance, threshold = 500) {
    if (balance >= threshold) return null;

    return {
        channel: NOTIFICATION_TYPES.EMAIL,
        recipient: user,
        message: `Warning: Your balance ($${balance}) is below the minimum threshold of $${threshold}.`,
        timestamp: new Date().toISOString(),
        status: "SENT"
    };
}

module.exports = { NOTIFICATION_TYPES, sendTransactionAlert, sendLowBalanceWarning };
