import './Button.css';

const Button = ({ title, img, fontSize, imgSize }) => {
    
    const style_span = {
        fontSize: fontSize,
    }
    const style_img = {
        width: imgSize,
        height: imgSize
    }

    return (  
        <button className='button'>
            <span style={style_span}>{title}</span>
            {img &&
                <img src={process.env.PUBLIC_URL + `/assets/icons/${img}`}
                style={style_img} />
            }
        </button>
    );
}
 
export default Button;