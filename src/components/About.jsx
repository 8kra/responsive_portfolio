import React from "react";

const About = () => {
  return (
    <div className="mt-48 bg-[url('/about_bg.svg')] pt-10 bg-cover">
      <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-[40%] space-y-10">
          <h1 className="text-5xl font-bold text-gray-900 ">
            Teaching my self a <br />{" "}
            <span className="text-indigo-600">Super-power</span>
          </h1>
          <div className="space-y-8 border-l p-4">
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              accusamus repellendus doloremque rerum quia eveniet? Accusantium
              commodi odio error saepe beatae quis totam perspiciatis ipsum,
              esse deserunt ad minima ea sint atque? <span> temporibus</span>{" "}
              Nihil quia dolore expedita? Dicta, itaque repellat.
            </p>
            <p className="text-sm text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio, veritatis enim nam sequi perspiciatis nihil dolorum
              autem facere inventore a quidem iure non reiciendis quasi sint ut
              praesentium voluptate nemo.
            </p>
            <button className="px-5 py-2 rounded-full bg-indigo-600 text-white">
              Read More
            </button>
          </div>
        </div>
        <div>
          <img src="about_img.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
