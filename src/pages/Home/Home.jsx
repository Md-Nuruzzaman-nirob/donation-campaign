import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const cardsData = useLoaderData();
  const [inputField, setInputField] = useState("");
  const [buttonClick, setButtonClick] = useState(false);

  const handleInput = (data, btn) => {
    setInputField(data);
    if (data !== "") {
      setButtonClick(btn);
    } else {
      setButtonClick(false);
    }
  };

  const inputCards = cardsData.filter((card) => card.Category === inputField);

  return (
    <div>
      <Banner handleInput={handleInput}></Banner>
      <Cards
        cardsData={cardsData}
        inputCards={inputCards}
        buttonClick={buttonClick}
      ></Cards>
    </div>
  );
};

export default Home;
