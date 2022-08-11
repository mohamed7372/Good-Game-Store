import './Button.css';

const Button = ({ title, img, fontSize, imgSize, heightBtn }) => {
    
    const style_button = {
        height: heightBtn ? heightBtn : 'fit-content'
    }

    const style_span = {
        fontSize: fontSize,
    }
    const style_img = {
        width: imgSize,
        height: imgSize
    }

    return (  
        <button className='button' style={style_button}>
            <span style={style_span}>{title}</span>
            {img &&
                <img src={process.env.PUBLIC_URL + `/assets/icons/${img}`}
                style={style_img} />
            }
        </button>
    );
}
 
export default Button;