import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper"
import useOnline from "../utils/useOnline"
import no_restaurant_found_img from "../assets/images/no-merchant.png"
import check_connection from "../assets/images/no-internet-connection.png"
const BodyComponent = () => {
    const [searchTxt, setSearchTxt] = useState("")
    const [filterdRestaurants, setFilterdRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])

    useEffect(() => {
        // API call
        getRestaurants();
        console.log("use effect");
    }, [])



    async function getRestaurants() {
        const data = await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }
    console.log("reender");

    const isOnline = useOnline();
    if (!isOnline) {
        return (
            <img className=" " src={check_connection} alt="NO INTERNET" />
        )
    }

    if (!allRestaurants) return null;

    return allRestaurants.length === 0 ? (<Shimmer />) : (
        < div className="flex flex-col w-10/12   mx-auto">
            {/* implementing the search functionality */}
            <div className="flex justify-center mt-8 mb-7 ">
                <input type="text" className="md:py-3 md:px-5 md:w-2/4 border-2 border-orange-400" placeholder="Search a restaurant you want..." value={searchTxt} onChange={(e) => { setSearchTxt(e.target.value) }} />
                <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-500 hover:border-orange-400 rounded-sm " data-testid="search-btn" onClick={() => {
                    // need to filer the data
                    const data = filterdata(searchTxt, allRestaurants);
                    // update the state of restraurants
                    setFilterdRestaurants(data)
                }}> search </button>
            </div>


            {
                filterdRestaurants.length === 0 && <div className="m-auto font-sans font-extrabold text-2xl ">
                    <img src={no_restaurant_found_img} />
                </div>
            }
            {/* one by one iterating over array */}
            <div data-testid="res-list" className="flex flex-wrap  justify-center justify-evenly h-auto w-full " >
                {filterdRestaurants.map((restaurant) => {
                    return (
                        <Link to={"/restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id}>
                            <RestrauntCard
                                {...restaurant?.data}
                                key={restaurant?.data?.id}
                            />
                        </Link>
                    );
                })}
            </div>
        </div >
    );
};
export default BodyComponent;

