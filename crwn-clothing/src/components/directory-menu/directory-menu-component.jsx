import CategoryItem from "../category-item/category-item-component";
import './directory-menu-styles.scss';
const Directory= ({categories}) => {
    return(
        <div className="directory-menu-container">
      {categories.map(({id,title,imageUrl}) => (
        <CategoryItem key={id} c={{title,imageUrl}} />
      ))}
    </div>
    )
}
export default Directory;