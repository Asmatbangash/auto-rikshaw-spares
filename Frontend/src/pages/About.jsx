import React from "react";
import { assets } from "../assets/assets";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Quality Auto Rickshaw Spare Parts You Can Trust
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At <strong className="text-blue-600">[Your Company Name]</strong>,
            we deliver premium-quality auto rickshaw spare parts built for
            durability, performance, and long-term reliability.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Whether you’re a mechanic, workshop owner, or daily rickshaw user,
            our extensive inventory — from engine kits to suspension systems —
            ensures your vehicle stays on the road and in top condition.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Backed by trusted suppliers, fast shipping, and responsive customer
            support, we aim to be your one-stop solution for all spare parts
            needs. Your satisfaction drives us forward.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={assets.Banner3}
            alt="Auto Rickshaw Spare Parts"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
