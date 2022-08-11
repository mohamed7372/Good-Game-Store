import Card from "./Card";
import './CardList.css';

const CardList = () => {

    const prod = {
        name: 'oculus quest',
        category: 'keyboards',
        price: '19.50'
    };

    return (  
        <div className="card-list">
            <Card prod={prod}/>
            <Card prod={prod}/>
            <Card prod={prod}/>
            <Card prod={prod}/>
            <Card prod={prod}/>
            <Card prod={prod}/>
            <Card prod={prod}/>
            <Card prod={prod}/>
        </div>
    );
}
 
export default CardList;