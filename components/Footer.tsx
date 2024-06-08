import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data/gridData";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Footer = () => {
  return (
    <footer id="contact" className="w-full mb-[100px] md:mb-5 pb-10">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take
          <span className="text-purple"> your</span> presence to the next level?
        </h1>
        <p className="text-white-200 my-5 md:mt-10 text-center">
          Reach me today and let's discuss how can I help you achieve your
          goals.
        </p>
        <a href="mailto:am2100913@qu.edu.qa">
          <MagicButton
            title={"Let's Get in Touch"}
            icon={<FaLocationArrow />}
            position={"right"}
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-16 items-center gap-3">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 Amr
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((social) => (
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              key={social.id}
            >
              <img src={social.img} alt={social.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
