import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationPageCard = ({ card }) => {
  // destructuring
  const {
    id,
    Title,
    Price,
    Text_button_bg,
    Another_Picture,
    Card_bg,
    Category,
    Category_bg,
  } = card || {};

  return (
    <div
      style={{
        background: Card_bg,
      }}
      className="flex items-center rounded-lg"
    >
      <div>
        <img src={Another_Picture} alt="" />
      </div>
      <div className="ml-4 mt-4">
        <h4
          style={{
            background: Category_bg,
            color: Text_button_bg,
          }}
          className="font-medium px-3 py-1 inline-block rounded-md"
        >
          {Category}
        </h4>

        <h3
          style={{
            color: Text_button_bg,
          }}
          className="pb-2 pt-2 text-xl font-semibold"
        >
          {Title}
        </h3>
        <h4
          style={{
            color: Text_button_bg,
          }}
          className="mb-5 font-semibold"
        >
          ${Price}
        </h4>
        <Link to={`/cards/${id}`}>
          <button
            style={{
              background: Category_bg,
              color: Text_button_bg,
            }}
            className="px-3 py-[6px] md:px-4 md:py-2 rounded-md text-xs md:text-base font-semibold mb-6"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

DonationPageCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default DonationPageCard;
