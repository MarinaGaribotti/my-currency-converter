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
    <Header />
    <Currencies />
    <Result />
  </div>
);

// == Export
export default App;
