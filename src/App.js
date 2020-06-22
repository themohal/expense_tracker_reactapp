import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from "./components/Balance";
import { ExpenseIncome } from './components/ExpenseIncome';
import {ListTransactions} from './components/ListTransactions';
import {AddTransactions} from './components/AddTransactions';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
      <Balance/>
      <ExpenseIncome/>
      <ListTransactions/>
      <AddTransactions/>
    </div>
    </GlobalProvider>
    
  );
}

export default App;
