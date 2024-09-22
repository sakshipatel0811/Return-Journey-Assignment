import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSearchFilter from "../../../hook/useSearchFilter";
import {
  setPage,
  setSearchValue,
  setTotalItems,
} from "../../../redux/slices/ProductSlice";
import ItemList from "../components/ItemList";
import SearchBar from "../components/SearchBar";
import { lazy, Suspense } from "react";

const Pagination = lazy(() => import("../components/Pagination"));

const Home = () => {
  const dispatch = useDispatch();
  const { items, searchValue, page, totalItems, limit } = useSelector(
    (state) => state.product
  );

  /*wrapped the function in useCallback so that whenever the page renders again the different
   reference of the function not created and the Pagination component will also not re-render*/
  const handlePageChange = useCallback(
    (pageValue) => {
      dispatch(setPage(pageValue));
    },
    [dispatch]
  );

  //custom hook for handling search filter
  const { filteredItems, handleSearch } = useSearchFilter({
    items,
    handleSearchValue: (value) => dispatch(setSearchValue(value)),
    resetPage: handlePageChange,
    currentPage: page,
  });

  useEffect(() => {
    dispatch(setTotalItems(filteredItems?.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredItems]);

  return (
    <div className="bg-gray-50 px-12 py-7  h-[100vh] overflow-auto">
      <div className="  flex flex-col ">
        <div className="flex justify-end">
          <div className="w-[300px]">
            <SearchBar
              searchValue={searchValue}
              setSearchValue={handleSearch}
            />
          </div>
        </div>
        <ItemList items={filteredItems} currentPage={page} limit={limit} />
        {totalItems ? (
          <Suspense fallback={<>Loading....</>}>
            <Pagination
              currentPage={page}
              totalItems={totalItems}
              limit={limit}
              onPageChange={handlePageChange}
            />
          </Suspense>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
