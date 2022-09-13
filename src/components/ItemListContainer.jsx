import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'
import  Products  from '../utilss/Products';
import customFetch from '../utilss/customFetch';

const ItemListContainer = () => {

    const [data , setData] = useState([]);
    
    useEffect(()=>{
        customFetch(2000,Products)
        .then(response => setData(response))
        .catch(error => console.log(error))
    },[]);

    return (
        <>
        <ItemList data={data}></ItemList>
        </>
    );
}

export default ItemListContainer;