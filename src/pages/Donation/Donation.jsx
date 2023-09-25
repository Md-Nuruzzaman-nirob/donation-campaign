import { useEffect, useState } from "react";
import DonationPageCard from "./DonationPageCard";

const Donation = () => {
  const [donationCard, setDonationCard] = useState([]);
  const [haveDonation, setHaveDonation] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem("donation"));

    if (getStorage) {
      setDonationCard(getStorage);
    } else {
      setHaveDonation(" You have not donated yet");
    }
  }, []);

  return (
    <div className="mb-36">
      {haveDonation ? (
        <h4 className="h-[65vh] flex items-center justify-center text-2xl">
          {haveDonation}
        </h4>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {toggle
              ? donationCard.map((card) => (
                  <DonationPageCard
                    key={card.id}
                    card={card}
                  ></DonationPageCard>
                ))
              : donationCard
                  .slice(0, 4)
                  .map((card) => (
                    <DonationPageCard
                      key={card.id}
                      card={card}
                    ></DonationPageCard>
                  ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => setToggle(!toggle)}
              className="px-3 py-[6px] md:px-5 md:py-2 rounded-md text-xs md:text-lg font-medium text-white bg-green-600 mb-6 "
            >
              {toggle ? "See Less" : "See All"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
