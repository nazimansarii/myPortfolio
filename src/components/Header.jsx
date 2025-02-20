import React from "react";
import RotatingText from "./RotatingText";
import WhatsappIcon from "../assets/WhatsappIcon";
import { Link } from "react-router";
import LinkedInIcon from "../assets/LinkedInIcon";

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-10 my-2 fixed top-0 left-0 right-0 z-50 ">
      <div className="flex  items-center">
        <RotatingText
          texts={[
            "Front-end Developer!",
            "Problem Solver!",
            "Tech Enthusiast!",
            "Tech Visionary!",
          ]}
          mainClassName="title text-xl w-max-content px-2 sm:px-2 md:px-3  text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.015}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <div className="flex items-center space-x-4">
        <Link
          to="https://www.linkedin.com/in/nazim-ansari-60a5772b7/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>

        <Link
          to="https://wa.me/9120135588?text=Hi, How are you?"
          target="_blank"
        >
          <WhatsappIcon />
        </Link>
      </div>
    </header>
  );
}
