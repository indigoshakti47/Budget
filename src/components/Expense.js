import React from "react";
const Expense = ({ expense }) => {
  return (
    <li className="expenses">
      <p>
          {expense.name}
          <span className="expense">
            $ {expense.amount}
          </span>
     </p>
    </li>
  );
};

export default Expense;
