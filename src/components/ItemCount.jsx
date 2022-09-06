import React,{useState} from 'react';
import { Button} from '@mui/material';
import { ShoppingCartCheckout } from '@mui/icons-material';
import {createTheme} from "@mui/material/styles"

const theme = createTheme({
    palette:{
        secondary:{
            main:"#DC28A3",
        }
    }
})

const IteamCount = ({initial,stock,onAdd}) => {
    const [count,setCount] = useState(initial);

    const decrease = () => {
        setCount(count -1 );
    };

    const increase = () => {
        setCount(count + 1);
    }
    return(
        <div className='counter'>
            <button className='botonCount1' disabled={count <= 1} onClick={decrease}>-</button>
            <span className='spanCount'>{count}</span>
            <button className='botonCount2' disabled={count >= stock} onClick={increase}>+</button>
            <div>
            <Button theme={theme} disabled={stock <= 0} onClick={() => onAdd(count) }  color='secondary'><ShoppingCartCheckout theme={theme} color="secondary"></ShoppingCartCheckout>Comprar</Button>
            </div>
        </div>
    )
}

export default IteamCount;