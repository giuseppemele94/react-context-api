import { createContext, useContext, useState } from "react"

//creo il context
const BudgetContext = createContext();

//defininiamo un custom Provider
function BudgetProvider({ children }) {

    //aggiungiamo le variabili di stato che vogliamo condividere[]
    const [budgetMode, setBudgetMode] = useState(false);

    return (

        <BudgetContext.Provider
            value={{
                budgetMode,
                setBudgetMode,
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}

//funzione per usare il context 
function useBudget () {
    return useContext(BudgetContext);
}

export {BudgetProvider, useBudget}; 
