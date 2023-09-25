import { useEffect, useState } from "react";
import DonationPageCard from "./DonationPageCard";

const Donation = () => {
  const [donationCard, setDonationCard] = useState([]);
  const [haveDonation, setHaveDonation] = useState(false);

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem("donation"));

    if (getStorage) {
      setDonationCard(getStorage);
    } else {
      setHaveDonation(" You have not donated yet");
    }
  }, []);

  return (
    <div>
      {haveDonation ? (
        <h4 className="h-[65vh] flex items-center justify-center text-2xl">
          {haveDonation}
        </h4>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {donationCard.map((card) => (
            <DonationPageCard key={card.id} card={card}></DonationPageCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;
