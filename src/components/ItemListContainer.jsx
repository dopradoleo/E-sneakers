import React from 'react';
import {Card,CardMedia,CardContent,Typography,CardActions} from '@mui/material';
import IteamCount from './ItemCount';
import {createTheme} from "@mui/material/styles"

const theme = createTheme({
    palette:{
        secondary:{
            main:"#F9F7F4 ",
        }
    }
})

const ItemListContainer = ({name,content,image}) => {
    
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} Air Jordan 1 al carrito`);
    }
    return (
        <>
            <Card className="cardAir"sx={{ maxWidth: 300 }}>
                <CardMedia className='air' image={image} alt="nikejordan1"/>
                    <CardContent className='airContent'>
                        <Typography  theme={theme} gutterBottom variant="h5" component="div" color="secondary">
                            {name}
                        </Typography>
                        <Typography  theme={theme} variant='body2' color="secondary">{content}</Typography>
                    </CardContent>
                    <CardActions className='airAction'>
                        <IteamCount initial={1} stock={5} onAdd={onAdd} />
                    </CardActions>
            </Card>
        </>
    );
}

export default ItemListContainer;