import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllFavorites } from '../utilities/local';
import Card from '../components/Card';

const Dashboard = () => {

    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorites = getAllFavorites();
        setCoffees(favorites);
    } , [])


    return (
        <div>
            <Heading title={"Wellcome to dashboard"} subtitle={" this is my dashboard this is my dashboard this is my dashboard this is my dashboard this is my my dashboard this is my dashboard "} ></Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        { 
          coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee}></Card>
          ))
          // data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
        }
      </div>
        </div>
    );
};

export default Dashboard;