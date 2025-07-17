import React from "react";
import { assets } from "../assets/assets";

function Spares({ data, className = "" }) {
  return (
    <>
      {data.map((data, index) => (
        <div key={index} className={`${className}`}>
          <div className="w-20 h-20 mx-auto mb-3">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-contain rounded-full border p-2"
            />
          </div>
          <p className="text-sm font-medium text-gray-700">{data.name}</p>
          <p dangerouslySetInnerHTML={{ __html: data.desc }}></p>
        </div>
      ))}
    </>
  );
}

export default Spares;
