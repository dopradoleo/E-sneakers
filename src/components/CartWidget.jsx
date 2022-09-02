import { Badge } from "@mui/material";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";

const CartWidget = () => {
    return (
        <Badge badgeContent={23} color="secondary">
            <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
        </Badge>
    );
}

export default CartWidget;