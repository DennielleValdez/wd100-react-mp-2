import React from 'react';

const SearchBar = ({ searchQuery, handleSearch, handleSearchClick }) => {
    return (
        <>
            <div className="d-flex justify-content-end align-items-end">
                <div className="input-group mb-3 mt-5 w-25">
                    <input
                        type="text"
                        id="search-text"
                        className="form-control w-50"
                        placeholder="Search here..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <button
                        className="btn btn-dark text-light"
                        type="button"
                        id="btn-search"
                        onClick={handleSearchClick}
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    );
};


export default SearchBar;