import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonationCard from "./DonationCard";

const Card = () => {
  // useState
  const [card, setCards] = useState({});
  const [cardData, setCardData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  useEffect(() => {
    setCards(cardData.find((Card) => Card.id == id));
  }, [id, cardData]);

  return (
    <div>
      <DonationCard card={card}></DonationCard>
    </div>
  );
};

export default Card;
