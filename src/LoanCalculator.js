// LoanCalculator.js

import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [processingFees, setProcessingFees] = useState(null);
  const [insuranceFees, setInsuranceFees] = useState(null);
  const [ledgerFees, setLedgerFees] = useState(null);

  const handleCalculate = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const periods = parseFloat(loanTerm) * 12;

    const monthlyPayment =
      (principal * rate) / (1 - Math.pow(1 + rate, -periods));

    const processingFees = principal * 0.025; // 2.5% of total loan
    const insuranceFees = principal * 0.015; // 1.5% of total loan
    const ledgerFees = principal * 0.01; // 1.0% of outstanding loan

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setProcessingFees(processingFees.toFixed(2));
    setInsuranceFees(insuranceFees.toFixed(2));
    setLedgerFees(ledgerFees.toFixed(2));
  };

  const handleReset = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTerm('');
    setMonthlyPayment(null);
    setProcessingFees(null);
    setInsuranceFees(null);
    setLedgerFees(null);
  };

  return (
    <div>
      <div>
        <a href="https://www.financingfix.com" target="_blank" rel="noopener noreferrer">
          Visit Our Website
        </a>
      </div>
      <label>
        Loan Amount (KES):
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </label>
      <br />

      <label>
        Interest Rate (%):
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </label>
      <br />

      <label>
        Loan Term (years):
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleReset}>Reset</button>

      {monthlyPayment !== null && (
        <div>
          <h2>Loan Summary:</h2>
          <p>Monthly Payment: {monthlyPayment} KES</p>
          <p>Processing Fees: {processingFees} KES</p>
          <p>Insurance Fees: {insuranceFees} KES</p>
          <p>Annual Ledger Fees: {ledgerFees} KES</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
