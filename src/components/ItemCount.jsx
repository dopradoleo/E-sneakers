import React,{useState,useEffect} from 'react';
import { Button} from '@mui/material';
import { ShoppingCartCheckout } from '@mui/icons-material';

const IteamCount = ({initial,stock,onAdd}) => {
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        setCount(initial);
    },[]);

    const decrease = () => {
        if(count > initial){
            setCount(count -1 );
        }
    };

    const increase = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
    return(
        <div className='counter'>
            <Button onClick={decrease} variant='contained' color='secondary'>-</Button>
            <Button variant='text' color='secondary'>{count}</Button>
            <Button className='botonCount2' disabled={count >= stock} onClick={increase} variant='contained' color='secondary'>+</Button>
            <Button onClick={() => onAdd(count) }  color='secondary'><ShoppingCartCheckout  color="secondary"></ShoppingCartCheckout>Agregar</Button>
            </div>
    )
}

export default IteamCount;