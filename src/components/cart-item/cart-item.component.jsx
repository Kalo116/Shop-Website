import {
    CartItemContainer,
    ItemDetails
} from './cart-item.styles.jsx';

const CardItem = ({ cardItem }) => {
    const { name, imageUrl, price, quantity } = cardItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CardItem;