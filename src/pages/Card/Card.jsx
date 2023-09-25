import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";

const Card = () => {
  // useState
  const [card, setCards] = useState({});

  const { id } = useParams();
  const cardData = useLoaderData();

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
