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
        <img
          className="w-40 md:w-full lg:w-48 xl:w-full"
          src={Another_Picture}
          alt=""
        />
      </div>
      <div className="ml-4 md:mt-4 lg:mt-0 xl:mt-4">
        <h4
          style={{
            background: Category_bg,
            color: Text_button_bg,
          }}
          className="font-medium text-xs md:text-base lg:text-xs xl:text-base px-2 md:px-3 py-1 inline-block rounded-md"
        >
          {Category}
        </h4>

        <h3 className="pb-2 pt-2 text-sm md:text-xl lg:text-base xl:text-xl font-semibold">
          {Title}
        </h3>

        <h4
          style={{
            color: Text_button_bg,
          }}
          className="text-sm md:text-base mb-2 md:mb-5 lg:mb-3 xl:5 font-semibold"
        >
          ${Price}
        </h4>

        <Link to={`/cards/${id}`}>
          <button
            style={{
              background: Text_button_bg,
              color: "white",
            }}
            className=" px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-base lg:text-xs xl:text-base font-semibold md:mb-6 lg:mb-0 xl:mb-6"
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
