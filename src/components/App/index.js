// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header baseAmount={12} />
    <Currencies />
    <Result value={1.09} currency="United States Dollar"/>
  </div>
);

// == Export
export default App;
