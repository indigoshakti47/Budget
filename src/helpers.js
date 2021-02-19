export const checkBudget = (budget, remainder) => {
  let klass;
  if (budget / 4 > remainder) {
    klass = "alert alert-danger";
  } else if (budget / 2 > remainder) {
    klass = "alert alert-warning";
  } else {
    klass = "alert alert-success";
  }
  return klass;
};
