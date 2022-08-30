import { AppBar,Toolbar,IconButton,Typography,Stack,Button} from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <LocalMallIcon></LocalMallIcon>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                    E-Sneakers
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">INICIO</Button>
                    <Button color="inherit">PRODUCTOS</Button>
                </Stack>

            </Toolbar>
        </AppBar>
    )
};
export default Navbar;