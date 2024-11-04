import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {

    const categories = useLoaderData();
    // console.log(categories)

  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"Our Coffee Shope"}
        subtitle={
          "We have Best in the town that you can enjoy in your free time"
        }
      ></Heading>

      {/* Categories */}
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
      
    </div>
  );
};

export default Home;
