const BigCard = ({ prod, style }) => {
    const secondStyle = style ? 'act' : '';

    return (  
        <div className={`big-card ${secondStyle}`}>
            <div className="content-card">
                <p className="cat">{prod.category}</p>
                <h6>starting from</h6>
                <p className="price">{prod.price}$</p>
                <h3>{prod.name}</h3>
                <p className="details">{prod.detail}</p>
            </div>
            <div className="btn">
                <img src={process.env.PUBLIC_URL + `/assets/icons/profile-ic.png`} />
                <p>show more</p>
            </div>
        </div>
    );
}
 
export default BigCard;