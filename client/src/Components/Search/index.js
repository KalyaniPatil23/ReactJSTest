import React from "react";
import "./search.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,} from '@fortawesome/free-solid-svg-icons';

function SearchBar(props) {
    return(
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder={props.placeholder}/>
                <div className="searchIcon">
                    <FontAwesomeIcon icon={faSearch} size="sm"/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;