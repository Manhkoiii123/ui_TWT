import React from "react";

const CustomInput = () => {
  return (
    <main className="p-24">
      <label className="flex flex-col-reverse relative focus group">
        <input required className="border-2 border-black px-4 py-3 leading-9" />

        <span className="absolute text-xl transform -translate-y-2 left-4 transition leading-10 group-focus-within:-translate-y-16">
          Email address *
        </span>
      </label>
    </main>
  );
};

export default CustomInput;
