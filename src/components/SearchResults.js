import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = (props) => {

    // Retrieving URL parameters using useParams, specifically the 'county' parameter
    let paramsObj = useParams();

    // Filtering the allhouses array passed in props to include only those houses that match the county parameter
    let filteredHousesArray = props.allhouses.filter((house) => (paramsObj.county === house.county) );
    console.log(filteredHousesArray);

    return (  
        <div>
            {/* Heading indicating this is a search results section */}
            <h4> Search Results here</h4>

            {/* Table to display the filtered houses */}
            <div className="table-responsive">
                <table className="table table-hover">
                    {/* Table header with column names */}
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    {/* Table body populated with rows of filtered houses */}
                    <tbody>
                        {
                            // Mapping over the filteredHousesArray to create a row for each house
                            filteredHousesArray.map((filteredhouse) => {
                                // Each house is passed to the SearchResultsRow component
                                return (
                                    <SearchResultsRow filteredhouse={filteredhouse}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default SearchResults;