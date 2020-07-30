import React from 'react';
import './App.css';

//import components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransactions } from './components/AddTransactions'
//import global provider
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
          <Balance/>
          <AccountSummary/>
          <TransactionHistory/>
          <AddTransactions/>
      </div>
      </GlobalProvider>

  );
}

export default App;
