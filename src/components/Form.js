import React, { useState } from "react";
import Error from "./Error";
import shortid from 'shortid'

const Form = ({addNewExpense}) => {
  const [name, saveName] = useState("");
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);
  const addExpense = (e) => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount) || name.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);

    const expense = {
        name,
        amount,
        id: shortid.generate()
    }
    addNewExpense(expense)
    saveName('');
    saveAmount(0)
  };
  return (
    <form onSubmit={addExpense}>
      <h2> Add your expenses here:</h2>
      {error ? (
        <Error msg="Both fields are required and only positive numbers are allowed" />
      ) : null}
      <div className="field">
        <label> Expense </label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E-toro"
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </div>
      <div className="field">
        <label> Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="$3000"
          value={amount}
          onChange={(e) => saveAmount(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add"
      />
    </form>
  );
};

export default Form;
