import toast from "react-hot-toast";

//get  coffe from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem("favorites")

    if(all) {
        const favorites = JSON.parse(all)
        return favorites
    }
    else{
        return [];
    }
}




//set coffe to local storage
const addFavorite = coffee => {
    console.log(coffee);
    const favorite = getAllFavorites();

    const isExist = favorite.find(item => item.id == coffee.id)
    if(isExist) return toast.error('Already Exist!');

    favorite.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorite))
    toast.success('Successfully added!');
}

export {addFavorite, getAllFavorites}