import './index.css';

const CategoryCard = (props) =>{
    const {data} = props;
    const {name, url} = data;
    return(
        <div className="category-card">
              <img className="category-card-image" src={url} alt="category" loading='lazy' />
              <p className="category-card-title">{name}</p>
        </div>
)
} 

export default CategoryCard;