import { shimmer_menu_card_unit } from "../config"
const MenuShimmer = () => {
    return (
        // <h1>loadim...</h1>
        <div className="restaurant-menu ">
            <div className="restaurant-summary stroke-color animate flex flex-wrap md:m-5 md:p-2 justify-center justify-items-center  ">
                <img className="shimmer-img stroke animate " />
                <div className="restaurant-summary-details   "><br />
                    <h2 className="shimmer-w40  stroke animate "></h2><br />
                    <p className="shimmer-w20 stroke animate "></p><br />
                    <div className="shimmer-w60  stroke animate ">
                    </div>
                </div>
            </div>

            <div className="restaurant-menu-content flex flex-wrap justify-center ">
                <div className="menu-items-container">
                    <div className="menu-title-wrap ">
                        <h3 className="shimmer-w40 stroke animate"></h3>
                        <p className="shimmer-w20 stroke animate"></p>
                    </div>
                    <div className="menu-items-list">
                        {Array(shimmer_menu_card_unit).fill("").map((element, index) =>
                            <div className="shimmer-menu-card" key={index}>
                                <div className="shimmer-item-details">
                                    <h3 className="shimmer-w40  stroke animate"></h3>
                                    <p className="shimmer-w20  stroke animate"> </p>
                                    <p className="shimmer-w60  stroke animate"></p>
                                </div>
                                <div className="shimmer-img-wrapper">
                                    <img className="shimmer-img stroke animate" />
                                    <div className="shimmer-btn stroke animate"> </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MenuShimmer;