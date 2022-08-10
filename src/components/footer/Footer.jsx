import SocialMedia from '../social_media/SocialMedia';
import './Footer.css';

const Footer = () => {
    return (  
        <div className="footer">
            <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
            <p>All rights reserved 2022 &copy;</p>
            <SocialMedia />
        </div>
    );
}
 
export default Footer;