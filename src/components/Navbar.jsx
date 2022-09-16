import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartWidget from "./CartWidget";
import {createTheme} from "@mui/material/styles"
import { NavLink } from "react-router-dom";

const theme = createTheme({
    palette:{
        primary:{
            main:"#212121" 
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
                <NavLink to='/'>
                    <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                        <LocalMallIcon theme={theme }color="warning"></LocalMallIcon>
                    </IconButton>
                </NavLink> 
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                    E-Sneakers
                </Typography>
                <Stack direction='row' spacing={3} position='unset'>
                    <NavLink to='/category/Nike'><Button theme={theme} color="inherit" variant="text">NIKE JORDAN</Button></NavLink>
                    <NavLink to='/category/Vans'><Button theme={theme} color="inherit">VANS</Button></NavLink>
                    <NavLink to='/category/Jordan'><Button theme={theme} color='inherit'>JORDAN RETRO</Button></NavLink>
                    <Button theme={theme} color="secondary"><NavLink to='/Cart'><CartWidget></CartWidget></NavLink></Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
};
export default Navbar;