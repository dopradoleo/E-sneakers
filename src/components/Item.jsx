import React from "react"
import { Card,CardMedia,CardContent,Typography,CardActions,Button,Grid} from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        secondary:{
            main:"#F9F7F4 ",
        }
    }
})

const Item = ({info}) => {
    return( 
        <>
        <Grid Card xs={2.5}>
        <Card className="cardAir"  sx={{ maxWidth: 300 }} >
                <CardMedia image={info.image} className='aair' alt="nikejordan1"/>
                    <CardContent className='airContent'>
                        <Typography  theme={theme} gutterBottom variant="h5" component="div" color="secondary">
                            {info.name}
                        </Typography>
                        <Typography  theme={theme} variant='body2' color="secondary">{info.price}</Typography>
                        <Typography textAlign='end' variant='caption' theme={theme} color='secondary'>{info.stock}</Typography>
                    </CardContent>
                    <CardActions className='airAction'>
                        <Button className="buton" variant='contained' color='secondary'>Detalle</Button>
                    </CardActions>
        </Card>
        </Grid>
        </>
)
}

export default Item;