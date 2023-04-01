import React from "react";
// import { Outlet } from "react-router-dom";
import BURGER_IMG from "../assets/images/burger-image.png"

// import Profile from "./Profile";

// const AboutComponent = () => {
//     return (
//         <div>
//             <h1>this is about page</h1>
//             <p> chapter 7 of namaste react finnging a path</p>
//             <Outlet />
//             {/* <Profile /> */}
//         </div>
//     )
// }

class AboutComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    componentDidMount() {
        // console.log("parent- componentDidMount")
    }
    render() {
        // console.log("parent- render")
        return (
            <div className="flex flex-col mt-9 md:flex-row md:justify-evenly md:items-center md:mt-0 md:h-screen ">
                <div  >
                    <h1 className=" p-3  text-[#545454] font-bold font-mono text-2xl md:text-4xl" >Welcome to<br />
                        The world of</h1>
                    <h2 className="px-4 py-2 ml-4 w-fit  rounded-lg bg-orange-400 text-2xl font-semibold font-serif text-[#EAEAEA] md:text-4xl">Tasty & Fresh Food</h2>
                    <p className="p-3 font-medium text-[#545454] italic  md:text-xl">"Better you will feel if you eat a <span className="text-orange-400">FoodFire</span>  healthy meal"</p>
                </div>
                <img className=" w-5/6 mx-auto md:mx-0 md:w-96 md:h-60 " src={BURGER_IMG} alt="burger-img" />
                {/* <Outlet /> */}
            </div>
        )
    }
}
export default AboutComponent;