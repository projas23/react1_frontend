import { useParams } from "react-router-dom";
import House from "./House";

const SearchedHouse = (props) => {
    

    // Retrieving URL parameters using useParams. Specifically, getting the 'id' parameter
    let paramsObj = useParams();
    
    
    console.log(paramsObj.id);

    // Searching for a house within the 'allhouses' prop whose '_id' matches the 'id' from the URL
    // The 'find' method returns the first matching element or undefined if no match is found
    let searchedHouseObj = props.allhouses.find((house) => { return paramsObj.id == house._id });
    

    console.log(searchedHouseObj);

    return (
        <>
            <h1> Searched House !</h1>

            <House houseInfo={searchedHouseObj} showEnquiry={true}/>
        </>
    );
}
 
export default SearchedHouse;
