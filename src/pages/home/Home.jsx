import Announce from '../../components/announce/Announce';
import Fillter from '../../components/fillter/Fillter';
import CardList from '../../components/card/CardList';
import './Home.css';

const Home = () => {

    

    return (  
        <div className="home">
            <Announce />
            <CardList title='our products' caption='categories'/>
            <Fillter title='our products' caption='categories'/>
            <CardList typeCard={2} title='our games' caption='games'/>
        </div>
    );
}
 
export default Home;