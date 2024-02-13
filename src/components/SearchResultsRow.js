import { useNavigate } from "react-router-dom";

const SearchResultsRow = ({filteredhouse}) => {

    let navigate = useNavigate();

    // Handler function for click event on the table row
    let clickHandler = () => {
        // Navigating to the '/searchedhouse/' route with the id of the filteredhouse
        console.log("Navigating to house with ID:", filteredhouse._id);
        navigate(`/searchedhouse/${filteredhouse._id}`);
    }

    return (
        // Table row element with an onClick event handler
        // The key attribute is set to the unique _id of the filteredhouse for React's list rendering
        <tr key={filteredhouse._id} onClick={clickHandler}>
            {/* Table data cell showing the address of the house */}
            <td scope="row"> {filteredhouse.address}</td>
            {/* Table data cell showing the price of the house */}
            <td> {filteredhouse.price} </td>
        </tr>
    );
}
 
export default SearchResultsRow;