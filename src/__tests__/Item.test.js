import { render, screen } from "@testing-library/react";
import React from "react";
import Item from "../modules/Products/components/Item";

describe("Item component", () => {
  it("should render product name and price correctly", () => {
    const itemInfo = {
      productId: 1,
      productName: "Test Product",
      productPrice: 1000,
    };

    render(<Item itemInfo={itemInfo} />);

    const productNameElement = screen.getByText(/Test Product/i);
    const productPriceElement = screen.getByText(/1000/);

    expect(productNameElement).toBeInTheDocument();
    expect(productPriceElement).toBeInTheDocument();
  });

  it("should handle null or undefined itemInfo gracefully", () => {
    render(<Item itemInfo={null} />);

    const productNameElement = screen.queryByText(/Test Product/);
    const productPriceElement = screen.queryByText(/1000/);

    expect(productNameElement).toBeNull();
    expect(productPriceElement).toBeNull();
  });
});
