import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Item from "./Item";

const ItemList = ({data = []}) => {
    return (
        <>
            <Grid container spacing={{xs:2,md:3}} columns={{xs:4,sm:8,md:12}} justifyContent='center' alignItems="center"   borderColor='secondary'>
                {data.map(product => <Item key={product.id} info={product}/>)}
            </Grid>
        </>
        )
}

export default ItemList;