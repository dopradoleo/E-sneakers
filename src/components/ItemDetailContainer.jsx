import React, { useState , useEffect } from "react";
import { Products } from "../utilss/Products";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const IteamDetailContainer = ()  => {
    const [data , setData] = useState({}); 
    const { detailID} = useParams();

    useEffect(()=> {
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(Products[2])
            },2000)
        });
        getData.then(res => setData(res.find(item => item.id === parseInt(detailID))));
        
    },[detailID]);
    return (
        <div display='flex' >
        <ItemDetail data={data} />
        </div>
    );
}

export default IteamDetailContainer;