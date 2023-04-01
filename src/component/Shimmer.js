const Shimmer = () => {
    return (
        <div className="flex flex-col w-10/12 mt-6  mx-auto" data-testid="shimmer" >
            <div className="shimmer-seach flex justify-center mt-8 mb-7"></div><br />
            <div className=" flex flex-wrap  justify-center justify-evenly h-auto w-full" >
                {
                    Array(15).fill("").map((e, index) => (
                        <div className="shimmer-card" key={index}>
                            <div className="shimmer-image"></div><br />
                            <div className="shimmer-title1"></div><br />
                            <div className="shimmer-title2"></div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default Shimmer;