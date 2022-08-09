import ItemMenu from "../item_menu/ItemMenu";
import useFetch from '../../hooks/useFetch';
import './List.css';

const List = ({url, title, icon}) => {

    const { data: categories, isPending, err } = useFetch(url);

    return (  
        <div className="list">
            {title &&
                (<header>
                    <h5>{title}</h5>
                    <img src={icon} alt="" />
                </header>)
            }
            <main>
                {err && (<div>{err}</div>)}
                {isPending && (<div>Loading...</div>)}
                {categories && (categories.map(
                    item => (<ItemMenu item={item} key={item.id} />)
                ))}
            </main>
        </div>
    );
}
 
export default List;