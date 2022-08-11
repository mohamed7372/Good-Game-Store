import './Card.css';

const CardGame = ({prod}) => {
    return (  
        <div className="card-game">
            <div className="img">
                <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                <p>{prod.price}$</p>
            </div>
            <div className="details">
                <div className="title">
                    <h4>{prod.name}</h4>
                    <p>{prod.category}</p>
                </div>
                <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
            </div>
        </div>
    );
}
 
export default CardGame;