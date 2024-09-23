import { configureStore } from "@reduxjs/toolkit";
import ProductSlice, {
  setItems,
  setPage,
  setTotalItems,
  setSearchValue,
} from "../redux/slices/ProductSlice";

describe("productSlice", () => {
  it("should update items in the state with setItems action", () => {
    const store = configureStore({ reducer: { product: ProductSlice } });
    const newItems = [
      { productId: 41, productName: "New Product", productPrice: 1000 },
    ];

    store.dispatch(setItems(newItems));

    expect(store.getState().product.items).toEqual(newItems);
  });

  it("should update page in the state with setPage action", () => {
    const store = configureStore({ reducer: { product: ProductSlice } });
    const newPage = 2;

    store.dispatch(setPage(newPage));

    expect(store.getState().product.page).toBe(newPage);
  });

  it("should update totalItems in the state with setTotalItems action", () => {
    const store = configureStore({ reducer: { product: ProductSlice } });
    const newTotalItems = 100;

    store.dispatch(setTotalItems(newTotalItems));

    expect(store.getState().product.totalItems).toBe(newTotalItems);
  });

  it("should update searchValue in the state with setSearchValue action", () => {
    const store = configureStore({ reducer: { product: ProductSlice } });
    const newSearchValue = "iphone";

    store.dispatch(setSearchValue(newSearchValue));

    expect(store.getState().product.searchValue).toBe(newSearchValue);
  });
});
