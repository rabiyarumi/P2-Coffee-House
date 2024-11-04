import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data);

    const handleSort = sortBy => {
        if(sortBy == 'popularity'){
            //disending sort by popularity
            const sorted = [...data].sort  ((a, b) => b.popularity - a.popularity);
            setCoffees(sorted);
        }
        else if(sortBy == 'rating'){
            //assending sort by rating
            const sorted = [...data].sort  ((a, b) => a.rating - b.rating);
            setCoffees(sorted);
        }

    }



    return (
        <div>
            <div className='flex justify-between my-8 items-center'>
                <div className='text-2xl font-bold'>Sort Coffeess</div>
                <div>
                    <button onClick={() => handleSort("popularity")} className='btn btn-warning mr-8'>By Popularity</button>
                    <button onClick={() => handleSort("rating")} className='btn btn-warning'>By Rating</button>
                </div>
            </div>
            
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                // data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        </div>
    );
};

export default Coffees;