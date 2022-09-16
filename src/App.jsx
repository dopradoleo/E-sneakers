import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import IteamDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <br></br>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Detail/:detailId' element={<IteamDetailContainer/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
