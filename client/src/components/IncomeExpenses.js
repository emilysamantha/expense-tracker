import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += parseFloat(amount)), 0)
    .toFixed(2);
  const expenses = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => (acc += parseFloat(amount)), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          -${numberWithCommas(expenses)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
