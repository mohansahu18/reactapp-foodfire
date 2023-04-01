import { useDispatch, useSelector } from "react-redux"
import { clearCard } from "../utils/cardSlice"
import FoodItem from "./fooditem"

const Card = () => {
    const cardItems = useSelector((store) => store?.card?.item)
    const dispatch = useDispatch()
    const handleClearCard = () => {
        dispatch(clearCard())
    }
    const totalPrice = cardItems.reduce((acc, curr) => {
        if (typeof curr.price === 'number') {
            return acc + curr.price;
        }
        else {
            return acc;
        }
    }, 0);
    return (
        <div className=" flex flex-col ">
            <div className="w-2/4 m-auto">
                <button className=" m-auto text-gray-900  bg-red-400 font-semibold text-xs md:w-32 md:h-9 px-1 md:font-bold md:text-lg hover:bg-red-700 hover:text-white py-1 hover:border-orange-400 rounded-2xl" onClick={() => handleClearCard()}>Clear Cart</button>
            </div>
            {cardItems.map((item) => (<FoodItem {...item} key={item.id} />))}
            <p className="m-auto font-semibold text-base w-2/4 md:font-bold md:text-lg">Total Price: {totalPrice / 100}</p>
            <p className="m-auto font-semibold text-base w-2/4 md:font-bold md:text-lg">Total Items - {cardItems?.length}</p>

            {/* </div> */}

        </div>
    )
}
export default Card





