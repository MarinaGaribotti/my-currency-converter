// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';
import './styles.css';
import currenciesList from '../../data/currencies';

// == Composant
const App = () => (
  <div className="app">
    <Header baseAmount={12} />
    <Currencies currenciesList={currenciesList} />
    <Result value={1.09} currency="United States Dollar"/>
  </div>
);

// == Export
export default App;
