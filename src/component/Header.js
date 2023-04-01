import { useState } from "react"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import logo from "../assets/images/Food Fire Logo.png"
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai"



const Title = () => {
    return (
        <img data-testid="logo" src={logo} alt="logo" className="h-20" />
    )
}
// Header component for header section: Logo, Nav Items,login-button
const HeaderComponent = () => {
    const [isLoggInUser, setIsLoggInUser] = useState(false)
    const [navIcon, setNvaIcon] = useState(false)
    const HandleNavBar = () => {
        setNvaIcon(!navIcon)
    }
    const isOnline = useOnline();
    const cardItem = useSelector((store) => store?.card?.item)
    console.log(cardItem);
    return (
        <div className="flex  justify-between items-center bg-pink-50 shadow-md px-4 flex-wrap " >
            <Title />
            <div onClick={HandleNavBar} className="block md:hidden">
                {navIcon ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <ul className=" hidden justify-center items-center md:flex   " >
                <li className=" font-bold text-gray-900  " >
                    <Link className=" p-2  hover:bg-orange-400 hover:text-white  rounded-2xl" to="/">
                        Home
                    </Link></li>
                <li className=" font-bold text-gray-900  ">
                    <Link to="/About" className="p-2  hover:bg-orange-400 hover:text-white  rounded-2xl" >
                        About
                    </Link>
                </li>
                <li className=" font-bold text-gray-900 ">
                    <Link to="/contact" className="p-2 hover:bg-orange-400 hover:text-white  rounded-2xl">
                        Contact
                    </Link>
                </li>
                <li className=" font-bold text-gray-900">
                    <Link to="/card" data-testid="card" className="p-2   rounded-2xl">
                        <AiOutlineShoppingCart size={30} className=" hover:text-red-400" />
                        <span className=" text-red-600  relative bottom-10 left-6  ">
                            {cardItem?.length}
                        </span>
                    </Link>
                </li>
            </ul>
            {/* responsive menu */}
            <ul className={navIcon ?
                ` flex flex-col justify-evenly  items-center res-nav z-10 fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-pink-50 ease-in-out duration-500`
                :
                `ease-in-out duration-500 fixed z-10 left-[-100%]`
            }>
                <li className="  font-bold  border-2 border-r-white hover:bg-orange-400 hover:text-white px-1 py-1 hover:border-orange-400 rounded-2xl" ><Link to="/">Home</Link></li>
                <li className=" font-bold  border-2 border-r-white hover:bg-orange-400 hover:text-white px-1 py-1 hover:border-orange-400 rounded-2xl"><Link to="/About">About</Link></li>
                <li className=" font-bold  border-2 border-r-white hover:bg-orange-400 hover:text-white px-1 py-1 hover:border-orange-400 rounded-2xl"><Link to="/contact">Contact</Link></li>
                <li className=" font-bold text-gray-900">
                    <Link to="/card" data-testid="card" className="p-2   rounded-2xl">
                        <AiOutlineShoppingCart size={30} className=" hover:text-red-400" />
                        <span className=" text-red-600  relative bottom-10 left-6  ">
                            {cardItem?.length}
                        </span>
                    </Link>
                </li>

            </ul>

            <div className="flex py-4 ">
                <h1 data-testid="online-status" className="px-2 py-4 ">{(isOnline) ? "🟢" : "🔴"}</h1>
                <div className="px-2  py-4 font-bold text-gray-900  hover:bg-orange-400 hover:text-white  hover:border-orange-400 rounded-2xl">
                    {
                        (isLoggInUser) ? <button onClick={() => setIsLoggInUser(false)}>LOGOUT</button> : <button onClick={() =>
                            setIsLoggInUser(true)}>LOGIN</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent