import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';


const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((el) => (
                <DirectoryItem key={el.id} category={el} />
            ))};

        </div>
    );
};

export default Directory;