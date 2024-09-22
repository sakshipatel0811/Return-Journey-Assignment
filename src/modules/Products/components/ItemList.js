import React, { memo, useMemo } from "react";
import Item from "./Item";

const ItemList = ({ items, currentPage, limit }) => {
  /*here if the current page or limit changes then only the sliceStartIndex and
   sliceEndIndex will get recalculated otherwise it returns the memoized value*/
  const sliceStartIndex = useMemo(
    () => (currentPage - 1) * limit,
    [currentPage, limit]
  );
  const sliceEndIndex = useMemo(
    () => currentPage * limit,
    [currentPage, limit]
  );
  
  return (
    <div className=" mt-3 rounded-lg">
      {items?.slice(sliceStartIndex, sliceEndIndex)?.map((itemInfo) => {
        return (
          <React.Fragment key={itemInfo?.productId}>
            <Item itemInfo={itemInfo} />
          </React.Fragment>
        );
      })}
      {!items?.length && (
        <div className="flex justify-center py-5">No Items Found</div>
      )}
    </div>
  );
};

export default memo(ItemList); // here React.memo is used for making this component a pure component so that this will render only when its prop changes
