import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    CheckoutContainer,
    CheckoutHeader,
    Total
} from './checkout.styles.jsx';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>

                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Description</span>
                </div>

                <div className='header-block'>
                    <span>Quantity</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>

            </CheckoutHeader>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <Total className='total'>Total: {`${cartTotal}$`}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;