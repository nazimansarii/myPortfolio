import React from "react";

export default function Message({ name, label, icons, onChange,value, error }) {
  return (
    <div className=" w-full my-4  rounded-lg  transition-all duration-150 ease-in-out  shadow-cyan-500 shadow-sm relative hover:shadow-md">
      <textarea
        rows={5}
        placeholder={label}
        type="email"
        name={name}
        className=" text-white/70 px-10 py-2  rounded-l-lg outline-none w-full"
        onChange={onChange}
        value={value}
      />
      <p className="absolute mt-1">{error}</p>
      <div className="absolute left-0 top-0 mt-[10px] ml-2">{icons}</div>
    </div>
  );
}
