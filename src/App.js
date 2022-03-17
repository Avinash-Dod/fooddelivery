import './App.css';
import { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import Container from './components/Container';
import Footer from './components/FooterComponent';
import DataHandle from './components/DataHandle';
const DUMMY_EXPENSES=[
  {
    "id":1,
    "firstName":"Avinash",
    "lastName":"Dod",
    "Address":"kabir Marg",
    "mno":8989084940
  }
];

  function App(props) {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
    const dataHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };
  
  return (
    <div>
    <HeaderComponent />
    <DataHandle sendData={dataHandler} />
    < Container Details={expenses} />
    
    <Footer />
    </div>
  );
}

export default App;
