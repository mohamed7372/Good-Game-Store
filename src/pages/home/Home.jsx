import Announce from '../../components/announce/Announce';
import CardList from '../../components/card/CardList';
import BigCardList from '../../components/card/BigCardList';
import './Home.css';

const Home = () => {
    return (  
        <div className="home">
            <Announce />
            <CardList title='our products' caption='categories' />
            <BigCardList title='our products' caption='categories'/>            
            <CardList typeCard={2} title='our games' caption='games'/>
        </div>
    );
}
 
export default Home;