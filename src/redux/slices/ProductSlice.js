import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { productId: 1, productName: "Vivo Iphone", productPrice: 20000 },
    { productId: 2, productName: "Samsung Galaxy", productPrice: 18000 },
    { productId: 3, productName: "Google Pixel", productPrice: 22000 },
    { productId: 4, productName: "OnePlus Nord", productPrice: 25000 },
    { productId: 5, productName: "Xiaomi Redmi Note", productPrice: 15000 },
    { productId: 6, productName: "Sony Xperia", productPrice: 21000 },
    { productId: 7, productName: "Oppo Reno", productPrice: 24000 },
    { productId: 8, productName: "Realme 9", productPrice: 16000 },
    { productId: 9, productName: "Nokia 3310", productPrice: 3000 },
    { productId: 10, productName: "Motorola Moto G", productPrice: 14000 },
    { productId: 11, productName: "Huawei P30", productPrice: 28000 },
    { productId: 12, productName: "LG Velvet", productPrice: 19000 },
    { productId: 13, productName: "Asus Zenfone", productPrice: 17000 },
    { productId: 14, productName: "HTC Desire", productPrice: 12000 },
    { productId: 15, productName: "Vivo V21", productPrice: 23000 },
    { productId: 16, productName: "Poco X3", productPrice: 20000 },
    { productId: 17, productName: "iPhone SE", productPrice: 30000 },
    { productId: 18, productName: "iPhone 12", productPrice: 60000 },
    { productId: 19, productName: "Samsung A52", productPrice: 27000 },
    { productId: 20, productName: "Xiaomi Mi 11", productPrice: 55000 },
    { productId: 21, productName: "Nokia 7.2", productPrice: 21000 },
    { productId: 22, productName: "Google Pixel 5", productPrice: 45000 },
    { productId: 23, productName: "OnePlus 8T", productPrice: 42000 },
    { productId: 24, productName: "Realme Narzo", productPrice: 13000 },
    { productId: 25, productName: "Samsung S21", productPrice: 80000 },
    { productId: 26, productName: "Oppo A53", productPrice: 11000 },
    { productId: 27, productName: "Vivo Y20", productPrice: 12000 },
    { productId: 28, productName: "Xiaomi Mi Note 10", productPrice: 35000 },
    { productId: 29, productName: "Honor 20", productPrice: 26000 },
    { productId: 30, productName: "BlackBerry Key2", productPrice: 40000 },
    { productId: 31, productName: "Infinix Note 10", productPrice: 10000 },
    { productId: 32, productName: "ZTE Axon", productPrice: 30000 },
    { productId: 33, productName: "TCL 10 Pro", productPrice: 25000 },
    { productId: 34, productName: "Lenovo K12", productPrice: 9000 },
    { productId: 35, productName: "Meizu 17", productPrice: 30000 },
    { productId: 36, productName: "Panasonic Eluga", productPrice: 7000 },
    { productId: 37, productName: "Lava Agni", productPrice: 12000 },
    { productId: 38, productName: "iPhone 11", productPrice: 50000 },
    { productId: 39, productName: "Sony Xperia 10", productPrice: 24000 },
    { productId: 40, productName: "Motorola Edge", productPrice: 35000 },
  ],
  page: 1,
  totalItems: 0,
  searchValue: "",
  limit: 10,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setItems, setSearchValue, setPage, setTotalItems } =
  productSlice.actions;
export default productSlice.reducer;
