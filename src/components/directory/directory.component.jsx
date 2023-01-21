import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';


const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((el) => (
                <CategoryItem key={el.id} category={el} />
            ))};

        </div>
    );
};

export default Directory;