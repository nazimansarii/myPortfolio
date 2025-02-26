import React from "react";

export default function Input({ name, label, icons, onChange, value, error }) {
  return (
    <div className=" w-full my-6 rounded-lg  transition-all duration-150 ease-in-out  shadow-cyan-500 shadow-sm relative hover:shadow-md">
      <input
        placeholder={label}
        type="text"
        name={name}
        className=" text-white/70 px-10 py-3  rounded-l-lg outline-none w-full"
        onChange={onChange}
        value={value}
      />
      <p className="absolute mt-1">{error}</p>

      <div className="absolute left-0 top-0 mt-3 ml-2">{icons}</div>
    </div>
  );
}
