import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context.jsx';

import {
    CartIconContainer,
    ItemCount,
    ShoppingIcon
} from './cart-icon.styles.jsx';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);

    const toggle = () => setIsCartOpen(!isCartOpen);


    return (
        <>
            {currentUser &&
                <CartIconContainer onClick={toggle} >
                    <ShoppingIcon className='shopping-icon' />
                    <ItemCount className='item-count'>{cartCount}</ItemCount>
                </CartIconContainer>
            }
        </>
    )
};

export default CartIcon;