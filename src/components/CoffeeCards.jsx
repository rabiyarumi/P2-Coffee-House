import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const { category } = useParams();
  const data = useLoaderData();
  const [coffees, setCoffees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );

      setCoffees(filteredByCategory);
    } else {
      // setCoffees(data);
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);

  console.log(category);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee}></Card>
          ))
          // data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
        }
      </div>

      <button
        onClick={() => navigate("/coffees")}
        className="btn bg-yellow-700 text-white"
      >
        View All
      </button>

      {/* //to show all card in same page */}
      <button
        onClick={() => setCoffees(data)}
        className="btn bg-yellow-700 text-white"
      >
        View All in here
      </button>
    </div>
  );
};

export default CoffeeCards;
