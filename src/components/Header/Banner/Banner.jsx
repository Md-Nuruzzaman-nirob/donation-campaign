import { useState } from "react";
import PropTypes from "prop-types";

const Banner = ({ handleInput }) => {
  const [inputField, setInputField] = useState("");
  const handleChange = (event) => {
    setInputField(event.target.value);
  };

  const handleInputButton = () => {
    handleInput(inputField, true);
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/xH88715/Banner-min.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-52 md:h-72 xl:h-[600px]  rounded-xl"
    >
      <div className="h-52 md:h-72 xl:h-[600px] flex justify-center items-center bg-white bg-opacity-80 ">
        <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 xl:gap-10 justify-center items-center z-50">
          <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl text-black font-bold">
            I Grow By Helping People In Need
          </h3>
          <div className="flex items-center">
            <div>
              <input
                onChange={handleChange}
                className="xl:w-[400px] input-xs md:input-sm xl:input-md border-none rounded-l lg:rounded-l-lg xl:rounded-l-xl"
                placeholder="Search"
              />
            </div>

            <div>
              <button
                onClick={handleInputButton}
                className="btn btn-xs md:btn-sm xl:btn-md bg-[#FF444A] hover:bg-[#FF444A] text-white border-none rounded-r rounded-l-none lg:rounded-r-lg xl:rounded-r-xl"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default Banner;
