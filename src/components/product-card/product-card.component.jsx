import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context.jsx';

import { Footer, Img, Name, Price, ProductCardContainer } from './product-card.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <Img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}$</Price>
            </Footer>
            {currentUser &&
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
            }
        </ProductCardContainer>
    );
};

export default ProductCard;