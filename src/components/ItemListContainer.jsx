import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'
import  Products  from '../utilss/Products';
import customFetch from '../utilss/customFetch';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [data , setData] = useState([]);
    
    const {categoryId} = useParams();


    useEffect(()=>{
        if(categoryId){
            customFetch(2000,Products.filter(item => item.categoryId === categoryId))
            .then(response => setData(response))
            .catch(error => console.log(error))
        } else {
            customFetch(2000,Products)
            .then(response => setData(response))
            .catch(error => console.log(error))
        }
    },[categoryId]);

    return (
        <>
        <ItemList data={data}></ItemList>
        </>
    );
}

export default ItemListContainer;