import CardProd from "./CardProd";
import CardGame from './CardGame';
import Fillter from "../fillter/Fillter";
import './CardList.css';

const CardList = ({ typeCard = 1, title, caption }) => {

    const prod = {
        name: 'oculus quest',
        category: 'keyboards',
        price: '19.50'
    };

    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (  
        <div className="card-list">
            <Fillter title={title} caption={caption} showBtn={true}/>
            
            <div className="cards">
                {typeCard == 1 ?
                    arr.map(i =>
                        (<CardProd prod={prod} key={i} />)
                    ) :
                    arr.map(i =>
                        (<CardGame prod={prod} key={i} />)
                    )
                }
            </div>
        </div>
    );
}
 
export default CardList;