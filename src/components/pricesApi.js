import React, { useEffect , useState} from "react";

const Prices = () => {
let [allPrices, setPrices] = useState([]);

useEffect(() =>{
    let priceList = async () => {
        const url = 'https://binance43.p.rapidapi.com/ticker/price';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5fac4b71d1msh29667a95e0c9630p1bb8ecjsn43ee1210d605',
		        'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setPrices(result);

        } catch (error) {
            console.error(error);
        }
    }
priceList();
}, [])

return ( 
    <>
        {
            
            <div class="container mt-5">
                <div className="row g-5">
                    {allPrices.map((data, index) => (
                        <div className="col-md-2 mt-5" key={index}>
                            <div className="priceCard">
                                <div className="priceCard-body">
                                    <h5 className="card-symbol">{data.symbol}</h5>
                                    <p className="card-price">{data.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        }
    </>
    );
}
 
export default Prices;