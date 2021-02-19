import React, { useState , useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import Budget from "./components/Budget";
function App() {
  const [budget, saveBudget] = useState(0);
  const [remainder, saveRemainder] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses ]= useState([]);
  const [expense, saveExpense] = useState({})
  const [createExpense, saveCreateExpense] = useState(false)

  useEffect(() => {
    if(createExpense){
      saveExpenses([
        ...expenses, expense
      ]) 

      const remainingBudget = remainder - expense.amount 
      saveRemainder(remainingBudget)
      saveCreateExpense(false)
    }
  }, [expense, createExpense, expenses, remainder])

  return (
    <div className="container">
      <header>
        <h1>Weekly budget</h1>
        <div className="main-content content">
          {showquestion ? (
            <Question
              saveBudget={saveBudget}
              saveRemainder={saveRemainder}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form saveExpense={saveExpense} saveCreateExpense={saveCreateExpense} />
              </div>
              <div className="one-half column">
                <List 
                expenses={expenses} />
                <Budget
                budget={budget}
                remainder={remainder}/>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
