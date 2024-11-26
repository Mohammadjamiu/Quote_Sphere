import React from "react";
import { MarqueeDemo } from "./MarqueeSlider";

const Footer: React.FC = () => {
  return (
    <footer className="responsive-container  bottom-0 left-0 right-0 bg-transparent bg-opacity-100 ">
      <div className="   p-4 ">
        <div className=" text-center text-[15px] md:text-[17px] text-gray-500">
          <p className="mt-1">
            Made with ☕️ and 💖 by
            <a
              href="https://github.com/Mohammadjamiu"
              className="bg-gradient-to-r pl-1 pb-0.5 from-primary to-primary bg-[length:0px_3px] hover:bg-[length:100%_3px] hover:text-primary bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              Mohammad-Jamiu
            </a>
          </p>
        </div>
      </div>
      <MarqueeDemo />
    </footer>
  );
};

export default Footer;
