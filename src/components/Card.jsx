/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({coffee}) => {

    const {name, image, category, rating, popularity} = coffee || {};

    return (
        <div className="space-y-2">
            <img src={image} alt="" />
            <p>{name}</p>
            <Link to={`coffees/${coffee.id}`} className="btn-warning btn">View details</Link>

        </div>
    );
};

export default Card;