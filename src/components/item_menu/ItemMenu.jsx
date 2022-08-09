import './ItemMenu.css';

const ItemMenu = ({ item }) => {
    return (  
        <div className="item-menu">
            <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} alt={ item.title } />
            <p>{ item.title }</p>
        </div>
    );
}
 
export default ItemMenu;