import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config"
const useRestaurant = (id) => {

    const [restaurant, setRestauraunt] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const data = await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=" + id);
            const json = await data.json();
            console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

            setRestauraunt(json.data)
            console.log("restaurant=" + restaurant);
        } catch (error) {
            // setMenuItems([]);
            setRestauraunt(null);
            console.log(error);
        }
    }
    return restaurant;
};
export default useRestaurant;