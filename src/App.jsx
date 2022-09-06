import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
    <Navbar/>
    <br></br>
    <ItemListContainer 
      image="https://i.postimg.cc/sg7Lr21z/Nike1.webp"
      name="Nike Air Jordan1 High"
      content="El modelo Nike Air Jordan 1 Retro High es una reedición que hace referencia a la versión original del Air Jordan 1."
    />
    </>
  );
}

export default App;
