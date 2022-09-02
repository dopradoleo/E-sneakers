import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greting="Hola soy el ItemListContainer"/>
    </>
  );
}

export default App;
