import Announce from '../../components/announce/Announce';
import Fillter from '../../components/fillter/Fillter';
import CardList from '../../components/card/CardList';
import './Home.css';

const Home = () => {

    

    return (  
        <div className="home">
            <Announce />
            <Fillter title='our products' caption='categories' showBtn={true}/>
            <CardList />

            <Fillter title='our products' caption='categories'/>
            <Fillter title='our games' caption='games' showBtn={true} />
        </div>
    );
}
 
export default Home;