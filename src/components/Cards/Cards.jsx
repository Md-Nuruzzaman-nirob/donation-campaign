import SingleCard from "./SingleCard";
import PropTypes from "prop-types";

const Cards = ({ cardsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-24 mb-32">
      {cardsData.map((card) => (
        <SingleCard key={card.id} card={card}></SingleCard>
      ))}
    </div>
  );
};

Cards.propTypes = {
  cardsData: PropTypes.array.isRequired,
};

export default Cards;
