import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import SearchBar from './searchBar';


// import (useEffect)

const NewsHome = () => {
let [allNews, setNews] = useState([]);
let [searchQuery, setSearchQuery] = useState("");
const [showResults, setShowResults] = useState(false);

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
            const response = await fetch(url, options);
            const result = await response.json();
            setNews(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }
newsList();
}, []);

 // Function to handle search input change
const handleSearch = (event) => {
    setSearchQuery(event.target.value);
};

const handleSearchClick = () => {
    setShowResults(true);
};

// Filtered news based on search query
const filteredNews = allNews.filter((data) =>
    data.title.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
    <>
        <SearchBar
            searchQuery={searchQuery}
            handleSearch={handleSearch}
            handleSearchClick={handleSearchClick}
        />
        <div className="row">
            {!showResults && allNews.map((data, index) => (
                <div className="col-md-3 mt-5" key={index}>
                    <div className="card h-100 object-fit rounded" height={300} id="newscard1">
                        <img src={data.thumbnail} className="card-img-top" alt="..." />
                        <div className="card-body w-100">
                            <h5 className="card-title">{data.title}</h5>
                            <br></br>
                            <div className="card-footer">
                            <Link to="/articleview" className="card-footer bg-transparent border-0 d-flex justify-content-center align-items-center" state={index}>
                                    View Article
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {showResults && (filteredNews.length > 0 ? (
                filteredNews.map((data, index) => (
                    <div className="col-md-3 mt-5" key={index}>
                        <div className="card h-100" id="newscard2">
                            <img src={data.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body w-100">
                                <h5 className="card-title">{data.title}</h5>
                                <br></br>
                                <div className="card-footer">
                                <Link to="/viewarticle" className="card-footer bg-transparent border-0 d-flex justify-content-center align-items-center" state={data.article}>
                                    View Article
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-12 mt-5 text-center">No results found</div>
            ))}
        </div>
    </>
);
}

export default NewsHome;