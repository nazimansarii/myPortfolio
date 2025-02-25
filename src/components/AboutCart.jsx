import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import TollTip from "./TollTip";
import HTML from "../assets/html-5.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";

export default function AboutCart({ setIsOpen }) {
  return ReactDOM.createPortal(
    <motion.div
      className="text-white w-full min-h-dvh  absolute top-0 left-0 flex justify-center items-center z-50 p-4 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div className="bg-[#272727] p-3 w-full md:w-1/2 rounded-xl border-gradient shadow-2xl  relative">
        <div className="flex justify-end  cursor-pointer  absolute top-1 right-3 p-2">
          <span
            onClick={() => {
              setIsOpen(false);
            }}
          >
            &#x274c;
          </span>
        </div>
        <h5 className="text-center font-bold text-2xl mb-2 text-[#45F8B5]">
          About Me
        </h5>
        <div className="py-2 px-3">
          <p className="text-justify">
            I am a passionate frontend developer dedicated to creating engaging
            and user-friendly web experience my portfolio highlights my
            creativity and attention to detail in desigining responsive visually
            appealing website i am eager to explore innovating projects and
            continuously echance my skills while making a positive impact in the
            tech world.
          </p>
        </div>
        <h6 className="text-center font-bold text-2xl mb-2 text-[#45F8B5]">
          Skills
        </h6>
        <div>
          <ul className="flex flex-wrap justify-center">
            {/* Html Icon */}
            <li className="m-2 p-2  text-black rounded-full hover:">
              <TollTip title="HTML5">
                <span className="svgContainer">
                  <img src={HTML} alt="" className="w-6" />
                </span>
              </TollTip>
            </li>

            {/* CSS icon */}
            <li className="m-2 p-2 text-black rounded-full">
              <TollTip title="CSS">
                <span className="svgContainer">
                  <img src={CSS} alt="" className="w-6" />
                </span>
              </TollTip>
            </li>

            {/* JavaScript icon */}
            <li className="m-2 p-2  text-black rounded-full">
              <TollTip title="JavaScript">
                <span className="svgContainer">
                  <img src={JS} alt="" className="w-6" />
                </span>
              </TollTip>
            </li>

            {/* reactJS icon */}
            <li className="m-2 p-2  text-black rounded-full">
              <TollTip title="ReactJS">
                <span className="svgContainer">
                  <svg
                    width="50"
                    height="50"
                    viewBox="175.7 78 490.6 436.9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#61dafb">
                      <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"></path>
                      <circle cx="420.9" cy="296.5" r="45.7"></circle>
                    </g>
                  </svg>
                </span>
              </TollTip>
            </li>

            {/* tailwind */}
            <li className="m-2 p-2  text-black rounded-full">
              <TollTip title="TailwindCSS">
                <span className="svgContainer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                      fill="#38bdf8"
                    />
                  </svg>
                </span>
              </TollTip>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>,
    document.getElementById("about-cart-root")
  );
}
