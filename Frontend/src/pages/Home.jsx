import React from "react";
import { Carousal, CardsData, BigCard, Title, Line } from "../components";
import { assets } from "../assets/assets";

function Home() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const sparePartsBanner = [
    { image: assets.Banner1 },
    { image: assets.Banner2 },
    { image: assets.Banner3 },
  ];

  const spareParts = [
    { name: "Clutch Plate", image: assets.cluchPlate },
    { name: "Piston Kit", image: assets.pistonKit },
    { name: "Cylinder", image: assets.cylinder },
    { name: "Silencer", image: assets.Silencer },
    { name: "Rear Axle", image: assets.RealAxle },
    { name: "Brake Shoe", image: assets.brakeShoe },
    { name: "Spark Plug", image: assets.SparkPlug },
    { name: "Headlight", image: assets.HeadLight },
    { name: "Tail Light", image: assets.TailLight },
    { name: "Air Filter", image: assets.AirFilter },
    { name: "Battery", image: assets.bettery },
    { name: "Speedometer", image: assets.speedMeter },
  ];

  const somePolicy = [
    {
      name: "7 Days Return Policy",
      desc: "Return any product within 7 days of purchase if you're not completely satisfied — no questions asked.",
      image: assets.returns,
    },
    {
      name: "Easy Exchange Policy",
      desc: "Enjoy a hassle-free exchange process. Quickly swap your product for the right size, color, or model.",
      image: assets.exchange,
    },
    {
      name: "Best Customer Support",
      desc: "Our support team is available 24/7 to help you with any queries, ensuring a smooth shopping experience.",
      image: assets.support,
    },
  ];

  const BestSellerProducts = [
    {
      image: assets.pistonKit,
      desc: "Durable piston kit for optimal engine performance.",
      price: "$69",
    },
    {
      image: assets.cylinder,
      desc: "Reliable cylinder block for consistent compression.",
      price: "$69",
    },
    {
      image: assets.Silencer,
      desc: "Noise-reducing silencer for smoother exhaust flow.",
      price: "$69",
    },
    {
      image: assets.RealAxle,
      desc: "Heavy-duty rear axle built for daily use.",
      price: "$69",
    },
  ];

  return (
    <div>
      <Carousal settings={settings} sparePartsBanner={sparePartsBanner} />
      <div className="py-10 px-4 bg-bases-100 text-center text-3xl">
        <div className="inline-flex gap-1 items-center mb-5">
          <Line className="w-8 sm:w-12 h-[2px] sm:h-[3px] text-gray-700" />
          <Title text1="AUTO RICKSHAW" text2="SPAREPARTS" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          <CardsData
            data={spareParts}
            className="bg-white p-4 my-4 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
          />
        </div>
      </div>
      <div className="text-center mx-12 mb-6">
        <div className="inline-flex items-center text-3xl gap-1 mb-5">
          <Title text1="BEST SELER " text2="PRODUCTS" />
          <Line className="w-8 sm:w-12 h-[2px] sm:h-[3px] text-gray-700" />
        </div>
        <BigCard product={BestSellerProducts} />
      </div>
      <div className="flex justify-center items-center max-sm:flex-wrap">
        <CardsData
          data={somePolicy}
          className="px-4 py-4 my-4 mx-10 rounded-lg text-center"
        />
      </div>
    </div>
  );
}

export default Home;
