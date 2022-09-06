import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartWidget from "./CartWidget";
import {createTheme} from "@mui/material/styles"

const theme = createTheme({
    palette:{
        primary:{
            main:"#212121" 
        },
        secondary:{
            main:"#F9F7F4 "
        },
        warning:{
            main:"#DC28A3 "
        }
    }
})


const Navbar = () => {
    return (
        <AppBar theme={theme} className="airNav" position="static" color="primary">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <LocalMallIcon theme={theme }color="warning"></LocalMallIcon>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                    E-Sneakers
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button theme={theme} color="secondary">INICIO</Button>
                    <Button theme={theme} color="inherit">PRODUCTOS</Button>
                    <Button theme={theme} color="secondary"><CartWidget></CartWidget></Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
};
export default Navbar;