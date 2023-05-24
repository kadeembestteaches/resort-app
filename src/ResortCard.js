function ResortCard({title,img,price})
{

    return (
        <div className="resort-card">

            <a href = "/"> 
                <img src={img} alt={title}/>   
            </a> 

            <div className="resortContent">
                <h3>{title}</h3>
                <p>${price} per night</p>
            </div>
        
        </div>

    )
}

export default ResortCard;