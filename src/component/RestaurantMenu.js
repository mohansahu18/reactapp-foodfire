import { IMG_CND_URL } from "../config";
import { ITEM_IMG_CDN_URL } from "../config";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cardSlice";
import { useDispatch } from "react-redux";
import Menuerror from "./Menuerror";
import { MdOutlineLocationOn } from "react-icons/md"

const RestaurantMenu = () => {
    // read a dynamic URL params
    const { id } = useParams();
    const restaurant = useRestaurant(id)
    const dispatch = useDispatch()
    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }
    return (!restaurant) ? <MenuShimmer /> : (
        <div className="  flex  flex-col ">
            {console.log(restaurant)}
            <div className="flex flex-col my-3 bg-black text-yellow-50 md:flex-row md:m-5 md:p-2 md:justify-center md:items-center  lg:px-32">
                <img src={IMG_CND_URL + restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="img" className="rounded-lg h-32 mt-5 mx-auto max-w-md md:flex-2 md:self-center md:h-44 md:w-64 " />
                <div className="flex flex-col m-5 md:flex-1 md:self-center">
                    <h1 className=" text-sm md:text-base " >restaurant id : {id}</h1>
                    <h2 className="text-3xl font-light sm:text-5xl">{restaurant.cards[0].card.card.info.name}</h2>
                    <div className="flex mt-5 justify-between text-xs  font-semibold pb-3 ">
                        <h3 className="flex">
                            <MdOutlineLocationOn size={20} />
                            {restaurant?.cards[0]?.card?.card?.info?.areaName}
                        </h3>
                        <h3 className="text-xs px-2">{restaurant?.cards[0]?.card?.card?.info?.avgRating} Avg Rating</h3>
                        <h3 className="text-xs px-2">{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
                        <div className="text-xs px-2" >{restaurant?.cards[0]?.card?.card?.info?.sla?.slaString}</div>
                    </div>
                </div>
            </div>

            {(restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.length === 0 || restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.length === null || restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.length === undefined) ? <Menuerror /> : (
                < div className="flex justify-center flex-col m-auto  mt-8 w-[95%]  md:w-5/6">
                    <div className=" p-5 ">
                        <h3 className="text-[#71797E] text-sm md:text-lg  font-extrabold">Recommended</h3>
                        <span className="mt-2 text-sm md:text-base">
                            {console.log(restaurant)}
                            {console.log(restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ?? [])}
                            {Object.keys(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)?.length} ITEMS
                        </span>
                    </div>
                    <div >
                        {Object?.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)?.map((item) => (
                            <div className="border-b-2 mb-3 border-[#CFD0D4] flex justify-between " key={item?.card?.info?.id}>
                                <div className="flex flex-col   ">
                                    <h3 className="w-auto text-[#545555] font-medium  text-sm md:text-lg md:font-semibold ">{item?.card?.info?.name}</h3>
                                    <p className=" text-[#3F4153] text-sm font-normal md:font-medium md:text-base">
                                        {item?.card?.info?.price > 0
                                            ? new Intl.NumberFormat("en-IN", {
                                                style: "currency",
                                                currency: "INR",
                                            }).format(item?.card?.info?.price / 100)
                                            : " "}
                                    </p>

                                    <p className="hidden sm:block md:text-base md:font-normal md:font-mono text-[#9FA0A9]">{item?.card?.info?.description}</p>
                                </div>
                                <div className=" flex justify-center justify-items-center flex-col">
                                    {item?.card?.info?.imageId && (
                                        <img
                                            className="m-auto rounded-lg h-15 w-20 md:h-20 md:w-20 "
                                            src={IMG_CND_URL + item?.card?.info?.imageId
                                            }
                                            alt={item?.card?.info?.name}
                                        />
                                    )}
                                    {console.log(item?.card?.info)}
                                    <button onClick={() => addFoodItem(item?.card?.info)}
                                        className="  bg-orange-400 text-red-200 rounded-md outline-none  m[2px] p-[2px] md:mt-1 md:p-1 md:w-20">
                                        ADD +</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
            }


        </div >
    )
}
export default RestaurantMenu;