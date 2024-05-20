import {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

const SinglePage = () => {
    let location = useLocation();
    let data1 = Number(location.state);
    console.log(data1);
    let [news, setNews] = useState ([]);
   
    useEffect(() =>{
        let newsList = async () => {
            const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '86265414cdmsh83237d0ca50e850p1af20fjsn9ec5791e185f',
		            'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
                }
            };
            
            try {
                let response = await fetch(url, options);
                let result = await response.json();
                setNews(result.data[data1]);
                console.log(result.data[data1]);
            } catch (error) {
                console.error(error);
            }
        }
    newsList();
    }, []);

    return ( 
        <>
        <div className="container-fluid singlePage mt-5">
        <div className="col-md-12">
            <div className="card">
            <Link to="/"className="btn gobackBtn bg-transparent border-0 d-flex justify-content-start align-items-start"><i class="fa-solid fa-arrow-left"></i>Go back to Homepage </Link>
            <br></br>
            <img src={news.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h1>{news.title}</h1>
                    <p>
                        {news.description}
                        <br></br>
                        {news.createdAt}
                        <br></br><br></br>
                        <a href={news.url} target="_blank" rel="noopener noreferrer">{news.url}</a>
                    </p>
                </div>
            </div>
        </div>
        </div>
        </>
     );
}

export default SinglePage;