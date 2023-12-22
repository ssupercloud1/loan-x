import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleCalculate = () => {
    // Perform loan calculation logic here
    // You may want to use a library like financial.js for precise calculations
    // For simplicity, we'll use a basic formula here
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const periods = parseFloat(loanTerm) * 12;

    const monthlyPayment =
      (principal * rate) / (1 - Math.pow(1 + rate, -periods));

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div>
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

      {monthlyPayment !== null && (
        <div>
          <h2>Monthly Payment:</h2>
          <p>{monthlyPayment} KES</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
