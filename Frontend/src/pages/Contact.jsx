import React from "react";

function Contact() {
  return (
    <section class="max-w-4xl mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p class="text-center text-gray-600 mb-10">
        Have a question or need help with a part? We're here to assist you.
      </p>

      <div class="bg-white shadow-md rounded-lg p-8">
        <form action="#" method="POST" class="grid grid-cols-1 gap-6">
          <div>
            <label class="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block mb-2 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
