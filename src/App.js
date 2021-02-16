import React , {useState} from 'react'
import Question from './components/Question'
function App() {
  const [budget, saveBudget] = useState(0);
  const [remainder, saveRemainder] = useState(0);
  return (
    <div className="container">
      <header>
        <h1>Weekly budget</h1>
        <div className="main-content content">

        <Question
        saveBudget ={saveBudget}
        saveRemainder={saveRemainder}
        />
        </div>
      </header>
    </div>
  );
}

export default App;
