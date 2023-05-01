import React from "react";

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px] bgcamp">
      <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-[#a5effa] rounded-t-[20px] w-full text-center truncate">
        {value}
      </h4>
      <p className="font-epilogue font-normal text-[16px] text-[#808191] bg-[#d5f1f5] px-3 py-2 w-full rounded-b-[20px] text-center">
        {title}
      </p>
    </div>
  );
};

export default CountBox;
