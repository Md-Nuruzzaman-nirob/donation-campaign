import { useEffect, useState } from "react";
import DonationPageCard from "./DonationPageCard";

const Donation = () => {
  const [donationCard, setDonationCard] = useState([]);
  const [haveDonation, setHaveDonation] = useState(false);
  const [seeAllButton, setSeeAllButton] = useState(false);

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem("donation"));

    if (getStorage) {
      setDonationCard(getStorage);
    } else {
      setHaveDonation(" You have not donated yet");
    }
  }, []);

  const handleSeeAllClick = () => {
    setSeeAllButton(true);
  };

  return (
    <div className="mb-20 md:mb-36">
      {haveDonation ? (
        <h4 className="h-[65vh] flex items-center justify-center text-2xl">
          {haveDonation}
        </h4>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {seeAllButton
              ? donationCard.map((card) => (
                  <DonationPageCard key={card.id} card={card} />
                ))
              : donationCard
                  .slice(0, 4)
                  .map((card) => (
                    <DonationPageCard key={card.id} card={card} />
                  ))}
          </div>
          {donationCard.length > 4 && (
            <div className={`text-center mt-10 ${seeAllButton && "hidden"}`}>
              <button
                onClick={handleSeeAllClick}
                className={`btn px-3 py-[6px] md:px-5 md:py-2 rounded-md text-xs md:text-lg font-medium text-white bg-[#FF444A] hover:bg-[#FF444A]  mb-6`}
              >
                See All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
