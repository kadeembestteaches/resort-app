import { useState } from "react";
import ResortCard from "./ResortCard";
import getResorts from "./data";

function ResortListing()
{


    const [resorts, setResorts] = useState(getResorts());

    return (

        <section id="section-resort-list">

            <div className= "container">

                <h1>Featured Resort</h1>

                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                    
                    {resorts.map(resort=>(
                     <ResortCard 
                        id ={resort.id}
                        title={resort.title} 
                        img={resort.image} 
                        price={resort.price} /> ))}
                </div>
            </div>
        </section>
    )
}

export default ResortListing;