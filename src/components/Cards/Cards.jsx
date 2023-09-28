import SingleCard from "./SingleCard";
import PropTypes from "prop-types";

const Cards = ({ cardsData, inputCards, buttonClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 md:mt-20 lg:mt-24 mb-16 md:mb-32">
      {buttonClick
        ? inputCards.map((inputCard) => (
            <SingleCard key={inputCard.id} card={inputCard}></SingleCard>
          ))
        : cardsData.map((card) => (
            <SingleCard key={card.id} card={card}></SingleCard>
          ))}
    </div>
  );
};

Cards.propTypes = {
  cardsData: PropTypes.array.isRequired,
  inputCards: PropTypes.array.isRequired,
  buttonClick: PropTypes.bool.isRequired,
};

export default Cards;
