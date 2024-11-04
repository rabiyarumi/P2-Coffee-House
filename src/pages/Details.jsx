import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorites } from "../utilities/local";

const Details = () => {
    const {id} = useParams();
    const data = useLoaderData()
    const [coffee, setCoffee] = useState({});
    //disable button
    const [isFavorite, setIsFavorite] = useState(false);


    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData)

        //btn disalbe function
        const favorite = getAllFavorites()
        const isFavExist = favorite.find(item => item.id == singleData.id);

        if (isFavExist){
            setIsFavorite(true)
        }

    },[data, id])

    //favoriet btn
    const handleFavorite = (coffee)  => {
        addFavorite(coffee)
        setIsFavorite(true)
    }

    return (
        <div>
            <img src={coffee.image} alt="" />
            <p>{coffee.name}</p>
            <p>{coffee.description}</p>
            <button disabled={isFavorite} onClick={() => handleFavorite(coffee)} className="btn btn-warning">Add Favorite</button>
        </div>
    );
};

export default Details;