import useFetch from '../../hooks/useFetch';
import './SocialMedia.css';

const SocialMedia = () => {

    const { data: social, isPending, err } = useFetch('http://localhost:8000/social_media');

    return (  
        <ul className="social-media">
            {err && (<div>{err}</div>)}
            {isPending && (<div>Loading...</div>)}
            {social && (social.map(
                item => (<li key={item.id}>
                    <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                </li>)
            ))}
        </ul>
    );
}
 
export default SocialMedia;