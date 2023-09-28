import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const Statistics = () => {
  const [donationCard, setDonationCard] = useState([]);

  const cardsData = useLoaderData();

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem("donation"));

    if (getStorage) {
      setDonationCard(getStorage);
    }
  }, []);

  const getStorageTotal = donationCard
    .map((item) => item.Price)
    .reduce((a, b) => a + b, 0);

  const cardsTotal = cardsData
    .map((item) => item.Price)
    .reduce((a, b) => a + b, 0);

  const data = [
    { label: "Your Donation", value: getStorageTotal, color: "#00C49F" },
    {
      label: "Total Donation",
      value: cardsTotal - getStorageTotal,
      color: "#FF444A",
    },
  ];

  const sizing = {
    margin: { right: 5 },
    width: 300,
    height: 400,
    legend: { hidden: true },
  };
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <PieChart
        series={[
          {
            outerRadius: 120,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 25,
          },
        }}
        {...sizing}
      />
      <div className="flex items-center gap-10 md:gap-20 lg:gap-28">
        <div className="flex items-center gap-3 lg:gap-5">
          <h3 className="text-xs font-semibold md:text-lg">Your Donation</h3>
          <div className="h-3 w-12 md:w-24 bg-[#00C49F]">.</div>
        </div>

        <div className="flex items-center gap-3 lg:gap-5">
          <h3 className="text-xs font-semibold md:text-lg">Total Donation</h3>
          <div className="h-3 w-12 md:w-24 bg-[#FF444A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
