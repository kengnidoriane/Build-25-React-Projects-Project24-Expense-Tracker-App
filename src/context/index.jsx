import { createContext, useState } from 'react'

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {

  const [formData, setFormData] = useState({
    type: 'income',
    amount: 0,
    description: ''
  });
  const [value, setValue] = useState('expense')
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allRansactions, setAllTransactions] = useState([]);


  function handleFormSubmit(currentFormData) {
    console.log(currentFormData);
    // si la description et le mountant sont vide la fonction s'arrete avec le mot cle return
    if (!currentFormData.description || !currentFormData.amount) return;
    setAllTransactions([
      ...allRansactions,
      // creation d'un nouvel objet contemant toute les proprietes de  currentData + une nouvelle prop qui est id
      {...currentFormData, id: Date.now()},
    ])
    
    
  }
  console.log('type of alltrasaction is :' ,typeof(allRansactions));
  

  return (
    <GlobalContext.Provider
      value={{
        formData, 
        setFormData, 
        totalExpense, 
        setTotalExpense, 
        totalIncome, 
        setTotalIncome, 
        value, 
        setValue, 
        allRansactions, 
        setAllTransactions, 
        handleFormSubmit
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
