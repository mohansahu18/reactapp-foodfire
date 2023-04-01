import NO_ITEM_FOUND from "../assets/images/sorry-no-item-found.png"
const Menuerror = () => {
    return (
        < div className="flex flex-col flex-wrap justify-center items-center border border-red-600">
            <h1 className="from-neutral-700 text-4xl drop-shadow-2xl items-center font-serif  capitalize">sorry no item is avaliable right now !!!</h1>
            <div className="h-full w-full flex  flex-wrap justify-center">
                <img src={NO_ITEM_FOUND} />

            </div>
        </div>
    )
}
export default Menuerror