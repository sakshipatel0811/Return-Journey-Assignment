import React, { memo } from "react";

const Item = ({ itemInfo }) => {
  return (
    <div className="grid grid-cols-2 gap-4 py-2 my-2 px-5 rounded bg-white ">
      <div>{itemInfo?.productName}</div>
      <div>&#8377; {itemInfo?.productPrice}</div>
    </div>
  );
};

export default memo(Item);
