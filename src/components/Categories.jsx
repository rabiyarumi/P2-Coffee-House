/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted my-10">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category}`}
            key={category.id}
            role="tab"
            className= {({isActive}) => `tab text-2xl ${isActive ? "bg-yellow-700 text-white" : ""}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
