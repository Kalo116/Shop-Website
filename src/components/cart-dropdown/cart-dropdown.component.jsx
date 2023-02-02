import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CardItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            {
                cartItems.length
                    ? (
                        <CartItems>
                            {cartItems.map(item => <CardItem key={item.id} cardItem={item} />)}
                        </CartItems>
                    )
                    : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
            }
            <Button onClick={goToCheckoutHandler}>
                Go to checkout
            </Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;