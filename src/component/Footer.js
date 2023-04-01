// Footer component for footer section: Logo, Nav Items
// const FooterComponent = () => {
//     return (
//         <h4>footer</h4>
//     )
// }
// export default FooterComponent;
// import React from "react";
import { FaLinkedin, FaInstagramSquare, FaGithubSquare, FaCopyright } from "react-icons/fa"

function FooterComponent() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                    <h4 className="text-xl font-bold mb-4">About Us</h4>
                    <p className="text-sm">
                        At Food Fire , we're passionate about making it easy for you to order your favorite food from your favorite restaurants. Our mission is to provide a seamless and convenient food ordering experience, so that you can enjoy delicious meals without leaving the comfort of your home                    </p>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                    <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                    <p className="text-sm">
                        123 Main Street, Suite 100 <br />
                        Anytown, USA 12345 <br />
                        Phone: 555-555-5555 <br />
                        Email: <a target={"_blank"} href="mailto:mohansahu18111811@gmail.com"> mohansahu18111811@gmail.com</a>


                    </p>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                    <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/mohan2003" target={"_blank"} className="text-gray-300 hover:text-white">
                            <FaLinkedin size={30} />

                        </a>
                        <a href="https://instagram.com/mohansahu_44?igshid=zddkntzintm=" target={"_blank"} className="text-gray-300 hover:text-white">
                            <FaInstagramSquare size={30} />

                        </a>
                        <a href="https://github.com/mohansahu18" target={"_blank"} className="text-gray-300 hover:text-white">
                            <FaGithubSquare size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <FaCopyright
                    size={20}
                    className=" mt-4 mr-2"
                />
                <p className=" text-center text-sm mt-4">
                    2023 Food Fire. All rights reserved.
                </p>
            </div>

        </footer>
    );
}

export default FooterComponent;
