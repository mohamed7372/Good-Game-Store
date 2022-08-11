import Fillter from "../fillter/Fillter";
import BigCard from "./BigCard";
import './CardList.css';

const BigCardList = ({ title, caption }) => {

    const prod = {
        name: 'oculus quest',
        category: 'keyboards',
        price: '19.50',
        detail: 'Lorem ipsum dolor sit amet quia alias similique nobis consequatur debitis. Porro, maxime expedita.'
    };

    const arr = [1, 2];

    return (  
        <div className="card-list">
            <Fillter title={title} caption={caption} showBtn={false}/>
            
            <div className="big-cards">
                {arr.map(i => 
                    (<BigCard prod={prod} key={i} style={i==2} />)
                )}
            </div>
        </div>
    );
}
 
export default BigCardList;