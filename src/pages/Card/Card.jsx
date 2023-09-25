import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
  // useState
  const [cards, setCards] = useState({});

  const { id } = useParams();

  const cardData = useLoaderData();

  useEffect(() => {
    setCards(cardData.find((Card) => Card.id == id));
  }, [id, cardData]);
  console.log(cards);

  return (
    <div>
      <h1>Card section</h1>
    </div>
  );
};

export default Card;
