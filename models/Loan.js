const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    account: {
        type: String,
        required: true
    },
    loanMarket: {
        type: String,
        required: true
    },
    loanAmount: {
        type: Number,
        required: true
    },
    collateralMarket: {
        type: String,
        required: true,
    },
    collateralAmount: {
        type: Number,
        required: true
    },
    loanCommitment: {
        type: String,
        required: true
    },
    cdr: {
        type: Number,
        required: true
    },
    debtCategory: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});


const Loan = mongoose.model('Loan', LoanSchema);

module.exports = Loan;