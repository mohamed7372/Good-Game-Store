import Button from '../button/Button';
import './Announce.css';

const Announce = () => {
    return (  
        <div className="announce">
            <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
            <div className="details">
                <div className="rating">
                    <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                    <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                    <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                    <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                    <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                </div>
                <h1>Headphones</h1>
                <h2><span>"W102 Magic tour"<br />gaming </span><span>headset</span></h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero fuga cum vitae fugit architecto possimus quibusdam repellendus temporibus modi.</p>
                <div className="buttons">
                    <Button title='ORDER NOW' img='' fontSize='13px' imgSize='20px'/>
                    <Button title='SPOILED' img='' fontSize='13px' imgSize='20px'/>
                </div>
            </div>
        </div>
    );
}
 
export default Announce;