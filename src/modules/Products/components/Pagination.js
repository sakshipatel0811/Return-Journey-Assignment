import React, { memo, useMemo } from "react";

const Pagination = ({ currentPage, totalItems, limit, onPageChange }) => {
  /*wrap the total pages logic inside useMemo so that this will only be recalculated
   when totalItems or limit changes*/
  const totalPages = useMemo(
    () => (totalItems ? Math.ceil(totalItems / limit) : 0),
    [totalItems, limit]
  );

  return (
    <div className="flex gap-2 justify-center mt-5 ">
      {Array(totalPages)
        .fill(null)
        ?.map((_, ind) => {
          return (
            <button
              key={ind}
              className={`${
                currentPage === ind + 1 ? "bg-blue-950 text-white" : ""
              } border px-3 py-1 rounded cursor-pointer`}
              onClick={() => onPageChange(ind + 1)}
            >
              {ind + 1}
            </button>
          );
        })}
    </div>
  );
};

export default memo(Pagination);
