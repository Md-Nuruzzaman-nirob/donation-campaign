import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  // destructuring
  const { id, Title, Text_button_bg, Picture, Card_bg, Category, Category_bg } =
    card || {};

  return (
    <Link to={`/cards/${id}`} className="mx-8 md:mx-0">
      <div
        style={{
          background: Card_bg,
        }}
        className="rounded-lg"
      >
        <img src={Picture} alt="" />

        <div className="ml-4 mt-4">
          <h4
            style={{
              background: Category_bg,
              color: Text_button_bg,
            }}
            className="text-sm md:text-base font-medium px-3 py-1 inline-block rounded-md"
          >
            {Category}
          </h4>

          <h3
            style={{
              color: Text_button_bg,
            }}
            className="pb-4 pt-2 md:text-xl font-semibold"
          >
            {Title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

SingleCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default SingleCard;
