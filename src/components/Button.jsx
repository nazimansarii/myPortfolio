import React from "react";

const Button = ({ title, onClick, rotate, children }) => {
  return (
    <div className="w-max">
      <div className="relative group">
        <button
          className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          onClick={onClick}
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="relative z-10 block px-5 md:px-6 py-2 md:py-3 rounded-xl bg-gray-950">
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-all duration-500 group-hover:translate-x-1">
                {title}
              </span>
              {children}
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Button;
