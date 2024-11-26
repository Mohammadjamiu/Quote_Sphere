import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="responsive-container bg-light dark:bg-background  fixed bottom-0 left-0 right-0  ">
      <div className="   p-4 ">
        <div className=" text-center sm:text-left text-gray-400">
          <p className="mt-1">
            Made with ☕️ and 🥐 by{" "}
            <a
              href="#"
              className="bg-gradient-to-r pb-0.5 from-primary to-primary bg-[length:0px_3px] hover:bg-[length:100%_3px] hover:text-primary bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              Mohammad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
