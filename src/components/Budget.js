import React, { Fragment } from "react";
import { checkBudget } from "../helpers";
const Budget = ({ budget, remainder }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: $ {budget}</div>
      <div className={checkBudget(budget, remainder)}>Remaining budget: $ {remainder}</div>
    </Fragment>
  );
};

export default Budget;
