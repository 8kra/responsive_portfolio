import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//messages
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    message:
      "Torem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam consectetur tenetur odio veniam, ullam non eum exercitationem qui fuga, placeat rem perspiciatis mollitia ipsa porro voluptates cupiditate, cum",
  },
  {
    id: 2,
    name: "Jane Smith",
    message:
      "Sorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam consectetur tenetur odio veniam, ullam non eum exercitationem qui fuga, placeat rem perspiciatis mollitia ipsa porro voluptates cupiditate, cum",
  },
  {
    id: 3,
    name: "Alice Johnson",
    message:
      "Aorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam consectetur tenetur odio veniam, ullam non eum exercitationem qui fuga, placeat rem perspiciatis mollitia ipsa porro voluptates cupiditate, cum",
  },
];

const Testmonial = ({ name, message }) => (
  <div className="p-5 h-[250px] flex flex-col justify-center bg-indigo-50 text-center rounded-lg">
    <div className="container mx-auto px-2 md:w-1/2 space-y-5">
      <p className="text-xs md:text-base text-gray-700">{message}</p>
      <p className="text-xs md:text-base text-gray-500">{name}</p>
    </div>
  </div>
);

const Testmonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestmonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestmonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  return (
    <div className="container p-2 mx-auto py-20 overflow-y-auto">
      <div className="relative flex flex-col jusitfy-center ">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={index === currentTestimonial ? "" : "hidden"}
          >
            <Testmonial {...testimonial} />
          </div>
        ))}

        <div className="w-full h-full px-5 absolute flex items-center justify-between">
          <button
            className="text-2xl text-gray-100 hover:text-gray-900 bg-indigo-800/30 rounded-md p-2"
            onClick={prevTestmonial}
          >
            <FaChevronLeft />
          </button>
          <button
            className="text-2xl text-gray-100 hover:text-gray-900 bg-indigo-800/30 rounded-md p-2"
            onClick={nextTestmonial}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
