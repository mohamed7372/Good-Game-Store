import Button from "../button/Button";
import List from "../item_menu/List";
import SocialMedia from "../social_media/SocialMedia";
import './SideBar.css';

const SideBar = () => {
    return (  
        <div className="sidebar">
            <div className="logo">
                <img src="" alt="logo" />
            </div>
            <Button title='Go to catalog' fontSize='10px' imgSize='16px' />
            <List url='http://localhost:8000/menus'/>
            <List url='http://localhost:8000/categories' title='category' icon='' />
            <SocialMedia />
            <List url='http://localhost:8000/helps'/>
        </div>
    );
}
 
export default SideBar;