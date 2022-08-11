import Button from '../button/Button';
import './Fillter.css';

const Fillter = ({ title, caption, showBtn}) => {
    return (  
        <div className="fillter">
            <div>
                <h3>{title}</h3>
                {showBtn && (
                    <div className="buttons">
                        <Button title='Top' fontSize='10px' heightBtn='26px'/>
                        <Button title='Popular' fontSize='10px' heightBtn='26px'/>
                        <Button title='Most Sold' fontSize='10px' heightBtn='26px'/>
                    </div>
                )}
            </div>
            <p>{caption}</p>
        </div>
    );
}
 
export default Fillter;