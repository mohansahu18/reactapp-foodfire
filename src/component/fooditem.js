import { IMG_CND_URL } from "../config";

const FoodItem = (
    {
        description,
        imageId,
        name, price,
    }
) => {
    return (
        <div className=" border-2 cursor-pointer p-3 m-auto h-auto w-11/12 justify-between flex flex-row border-red-900 flex-wrap shadow-[-1px_5px_10px_5px_rgb(112,112,112,20%)] transform md:w-2/4 
     ">
            <div className="flex flex-col w-3/4 ">
                <h4 className="font-semibold text-xs md:text-base md:font-bold">{name}</h4>
                {/* <h3 className="text-xs">{description}</h3> */}
                <h4 className="font-semibold text-xs md:text-base md:font-bold">₹{price / 100}</h4>
            </div>
            <img src={IMG_CND_URL + imageId} alt="logo" className="w-14 h-14 rounded-lg" />

        </div>
    );
};
export default FoodItem;
