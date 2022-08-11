import './Card.css';

const CardProd = ({prod}) => {
    return (  
        <div className="card">
            <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
            <h4>{prod.name}</h4>
            <p>{prod.category}</p>
            <p>{prod.price}$</p>
            <div className="btn">
                <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                <span>add to card</span>
            </div>
        </div>
    );
}
 
export default CardProd;