import './AnnounceSide.css';

const AnnounceSide = () => {
    return (  
        <div className="announce-side">
            <h1>get</h1>
            <p>a <span>discount</span></p>
            <p>with a promo code</p>
            <div className="btn">
                <span>good game</span>
                <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
            </div>
        </div>
    );
}
 
export default AnnounceSide;