import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {

  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Love to Code.", "Frontend Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Devanandan Anand</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use logic as the foundation to build user-first digital experiences — combining clean code with visual clarity. 
          I'm not just coding interfaces, but crafting responsive,
          real-world solutions that simplify how people interact, click by click.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Devpkyours" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            {/* <a href="https://github.com/Devpkyours" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://github.com/Devpkyours" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span> */}
            {/* </a> */}
            <a href="https://www.linkedin.com/in/devanandan-anand-8821ba203/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaHtml5 />

            </span>
            <span className="bannerIcon">
              <IoLogoJavascript  />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
