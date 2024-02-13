import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchFilter = (props) => {
    // Using the useNavigate hook for programmatically navigating to different routes
    let navigate = useNavigate();

    // Logging the array of all houses passed as props to the component
    console.log(props.allhouses);

    // Mapping over the allhouses array to create an array of county names
    let arrWithDupeCounties = props.allhouses.map((elem) => elem.county);
    console.log(arrWithDupeCounties);
    
    // Using a Set to remove duplicate county names and then converting it back to an array
    const uniqueCounties = Array.from(new Set(arrWithDupeCounties));
    console.log(uniqueCounties);

    // changeHandler function that is called when a dropdown item is clicked
    let changeHandler = (e) => {
        e.preventDefault();  // Preventing the default anchor tag behavior
        let countyName = e.target.textContent;  // Getting the county name from the text content of the clicked element
        navigate(`/searchresults/${countyName}`);  // Navigating to the '/searchresults/' route with the selected county name
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-sm-2 text-center">
                <div className="dropdown">
                    {/* Dropdown button */}
                    <button className="btn btn-outline-primary m-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Select County
                    </button>
                    {/* Dropdown menu items */}
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {/* Mapping over uniqueCounties to create a dropdown item for each county */}
                        {uniqueCounties.map((countyName) => (
                            <li key={countyName}>
                                <a className="dropdown-item" onClick={changeHandler}>{countyName}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;