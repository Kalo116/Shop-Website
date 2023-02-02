import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
    CartIconContainer,
    ItemCount,
    ShoppingIcon
} from './cart-icon.styles.jsx';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggle = () => setIsCartOpen(!isCartOpen);


    return (
        <CartIconContainer onClick={toggle} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;