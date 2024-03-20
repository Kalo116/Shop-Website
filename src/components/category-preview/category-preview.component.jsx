import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewItem, CategoryPreviewContainer, CategoryPreviewTitle } from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
            </h2>

            <CategoryPreviewItem>
                {products.filter((_, index) => index < 4)
                    .map((product) => <ProductCard key={product.id} product={product} />)}
            </CategoryPreviewItem>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;