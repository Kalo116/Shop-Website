import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
    CheckoutItemContainer,
    ImageContainer,
    NameSpan,
    PriceSpan,
    QuantitySpan,
    RemoveButton
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <NameSpan className='name'>{name}</NameSpan>
            <QuantitySpan>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </QuantitySpan>
            <PriceSpan className='price'>{price}$</PriceSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;