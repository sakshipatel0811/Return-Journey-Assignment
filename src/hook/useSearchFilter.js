import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const useSearchFilter = ({
  items,
  wait = 300,
  handleSearchValue,
  resetPage,
  currentPage,
}) => {
  const [debounceTerm, setDebouncedTerm] = useState("");
  const timeoutIdRef = useRef();

  //this will debounce the search change.
  const handleSearch = useCallback((e) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    handleSearchValue(e.target.value);
    timeoutIdRef.current = setTimeout(() => {
      setDebouncedTerm(e.target.value.trim());
    }, wait);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*this function will return the same items if the debounceTerm is not changing instead
   of again recalculate and will only re-render if either the items or debouncedTerm changes*/
  let filteredItems = useMemo(() => {
    if (!debounceTerm) {
      return items;
    } else {
      return items?.filter((itemInfo) => {
        return itemInfo?.productName
          ?.toLowerCase()
          ?.includes(debounceTerm?.toLowerCase());
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceTerm, items]);

  useEffect(() => {
    debounceTerm && currentPage !== 1 && resetPage(1); //Reseting the page to 1 if the user is on some other page and searches anything.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceTerm]);

  return { filteredItems, handleSearch };
};

export default useSearchFilter;
