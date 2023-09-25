import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
  const cardsData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Cards cardsData={cardsData}></Cards>
    </div>
  );
};

export default Home;
