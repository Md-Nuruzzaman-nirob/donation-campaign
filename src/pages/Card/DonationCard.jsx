import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const DonationCard = ({ card }) => {
  // destructuring
  const {
    id,
    Title,
    Price,
    Description,
    Picture,
    Category_bg,
    Text_button_bg,
  } = card || {};

  const handleClickAddLocalStorage = () => {
    let addToLocalStorage = [];
    const getStorage = JSON.parse(localStorage.getItem("donation"));
    if (!getStorage) {
      addToLocalStorage.push(card);
      localStorage.setItem("donation", JSON.stringify(addToLocalStorage));
      swal("Accepted", "Thank you for your donation!!!", "success");
    } else {
      const isExist = getStorage.find((item) => item.id === card.id);

      if (!isExist) {
        addToLocalStorage.push(...getStorage, card);
        localStorage.setItem("donation", JSON.stringify(addToLocalStorage));
        swal("Accepted", "Thank you for your donation!!!", "success");
      } else {
        swal("Sorry!", "You have already donated here", "error");
      }
    }
  };

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${Picture})`,
        }}
        className="h-48 md:h-80 lg:h-[450px] xl:h-[700px] bg-cover bg-no-repeat rounded-xl flex items-end"
      >
        <div className="h-14 md:h-20 lg:h-28 xl:h-32 w-full bg-[#0B0B0B80] opacity-50 rounded-b-xl"></div>
      </div>

      <div className="absolute top-[150px] md:top-[260px] lg:top-[370px] xl:top-[605px]">
        <Link to={"/donation"} state={id}>
          <button
            onClick={handleClickAddLocalStorage}
            style={{
              background: Category_bg,
              color: Text_button_bg,
            }}
            className="px-3 py-[6px] md:px-4 md:py-2 lg:py-3 xl:px-6 xl:py-4 rounded-lg text-xs md:text-base lg:text-xl  font-bold md:font-semibold ml-4 md:ml-5 lg:ml-9"
          >
            Donate ${Price}
          </button>
        </Link>
      </div>

      <div className="mt-10 md:mt-14 mb-32">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          {Title}
        </h3>

        <p className="text-sm text-[#0B0B0BB2] opacity-90">{Description}</p>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default DonationCard;
