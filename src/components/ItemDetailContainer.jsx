import React, { useState , useEffect } from "react";
import { Products } from "../utilss/Products";
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount'

const IteamDetailContainer = ()  => {
    const [data , setData] = useState({}); 
    useEffect(()=> {
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(Products[2])
            },2000)
        });
        getData.then(res => setData(res))
        
    },[]);
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} Air Jordan 1 al carrito`);
    }
    return (
        <div display='flex' >
        <ItemDetail data={data} />
        <ItemCount display='flex' initial={1} stock={5} onAdd={onAdd} ></ItemCount>
        </div>
    )
}

export default IteamDetailContainer;