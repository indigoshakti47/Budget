import React , {Fragment, useState} from 'react'

const Question  = () => {
    const [amount, saveAmount] = useState(0);
    const [error, saveError] = useState(false);
    const addBudget = e => {
        e.preventDefault();
        if(amount < 1 || isNaN(amount) ){
            saveError(true);
            return;
        }
        saveError(false)
    }


    return ( 
        <Fragment>
            <h2> What's your budget </h2>
            <form 
            onSubmit={addBudget}
            >
                <input
                type="number"
                className="u-full-width"
                placeholder="What's your budget"
                onChange={e => {
                    saveAmount(parseInt(e.target.value, 10))
                }}
                />
                <input
                type="submit"
                className="button-primary u-full-width"
                value="Set budget"
                />
            </form>
        </Fragment>

     );
}
 
export default Question ;