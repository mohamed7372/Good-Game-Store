import './NavBar.css';

const NavBar = () => {
    return (  
        <div className="navbar">
            <form>
                <input
                    type="text"
                    name="search"
                    placeholder='Search...'/>
            </form>
            <div className="icons">
                <p>Hello, Mohamed</p>
                <div className='img-profile'>
                    <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                </div>
                <div className='ic-noti'>
                    <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`}/>
                    <p>+9</p>
                </div>
                <div className='ic-noti'>
                    <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`}/>
                    <p>2</p>
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;