export function filterdata(searchTxt, allRestaurants) {
    const filterdata = allRestaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase())
    )
    return (
        filterdata)
}
