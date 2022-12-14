import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {Card, CardContent, CardMedia, Typography } from '@mui/material';
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {

    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} Air Jordan 1 al carrito`);

    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Card sx={{ bgcolor: '#fff', height: '60vh' }} display='flex' justifyContent='center'>
                <Typography color='inherit' variant='h5' display='flex' justifyContent='center'>{data.name}</Typography>
                <CardMedia display='flex' justifyContent='center' image={data.image} className='air' alt={data.name}/>
                <CardContent display='flex' justifyContent='center'>
                    <Typography color='inherit' variant='body1' display='flex' justifyContent='right' >{data.description}</Typography>
                    <Typography color='inherit' variant='h6' display='flex' justifyContent='center'>{data.price}</Typography>
                    <Typography color='inherit' variant='spam'>{data.stock}</Typography>
                </CardContent>
                </Card>
                <ItemCount display='flex' initial={1} stock={5} onAdd={onAdd} ></ItemCount>
            </Container>
        </React.Fragment>
    );
}
export default ItemDetail;