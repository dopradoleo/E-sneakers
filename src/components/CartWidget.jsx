import { Badge } from "@mui/material";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import {createTheme} from "@mui/material/styles"

const theme = createTheme({
    palette:{
        secondary:{
            main:"#DC28A3",
        }
    }
})

const CartWidget = () => {
    return (
        <Badge badgeContent={23} color="error" >
            <ShoppingCartCheckoutOutlined theme={theme} color="secondary"></ShoppingCartCheckoutOutlined>
        </Badge>
    );
}

export default CartWidget;