import images from "../../../assets/Rectangle 4281.png";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="h-[220px] md:h-[320px] lg:h-[440px] xl:h-[640px] rounded-lg opacity-40"
        src={images}
        alt=""
      />

      <div className="absolute left-8 bottom-20 md:left-24 md:bottom-28 lg:left-36 lg:bottom-44 xl:left-48  2xl:left-72 xl:bottom-60">
        <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 xl:gap-10 justify-center items-center">
          <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl text-black font-bold">
            I Grow By Helping People In Need
          </h3>
          <div className="flex items-center">
            <div>
              <input
                className="xl:w-[400px] input-xs md:input-sm xl:input-md border-none rounded-l lg:rounded-l-lg xl:rounded-l-xl"
                placeholder="Search"
              />
            </div>

            <div>
              <button className="btn btn-xs md:btn-sm xl:btn-md bg-[#FF444A] hover:bg-[#FF444A] text-white border-none rounded-r rounded-l-none lg:rounded-r-lg xl:rounded-r-xl">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
