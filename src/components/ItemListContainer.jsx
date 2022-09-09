import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'
import IteamCount from './ItemCount';
import  Products  from '../utilss/Products';
import customFetch from '../utilss/customFetch';

const ItemListContainer = () => {

    const [data , setData] = useState([]);
    
    useEffect(()=>{
        customFetch(2000,Products)
        .then(response => setData(response))
        .catch(error => console.log(error))
    },[]);

    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} Air Jordan 1 al carrito`);
    }
    return (
        <>
        <IteamCount initial={1} stock={5} onAdd={onAdd} />
        <br></br>
        <ItemList data={data}></ItemList>
        </>
    );
}

export default ItemListContainer;