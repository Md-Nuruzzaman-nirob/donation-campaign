import image from "../../../assets/Logo.png";
const Logo = () => {
  return (
    <div>
      <img className="w-24 md:w-36 lg:w-48 xl:w-full" src={image} alt="" />
    </div>
  );
};

export default Logo;
