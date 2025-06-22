import React from "react";
import { assets } from "../assets/assets";

function Spares() {
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

  return (
    <div className="py-10 px-4 bg-bases-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Auto Rickshaw Spare Parts
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {spareParts.map((sparePart, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-3">
              <img
                src={sparePart.image}
                alt={sparePart.name}
                className="w-full h-full object-contain rounded-full border p-2"
              />
            </div>
            <p className="text-sm font-medium text-gray-700">
              {sparePart.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Spares;
