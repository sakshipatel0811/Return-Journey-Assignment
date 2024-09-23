import { render, screen } from "@testing-library/react";
import React from "react";
import ItemList from "../modules/Products/components/ItemList";

describe("ItemList component", () => {
  it("should render the correct number of items based on pagination", () => {
    const currentPage = 2;
    const limit = 5;

    const items = [
      { productId: 1, productName: "Shirt", productPrice: 20000 },
      { productId: 2, productName: "Jeans", productPrice: 18000 },
      { productId: 3, productName: "Google Pixel", productPrice: 22000 },
      { productId: 4, productName: "OnePlus Nord", productPrice: 25000 },
      { productId: 5, productName: "Xiaomi Redmi Note", productPrice: 15000 },
      { productId: 6, productName: "Sony Xperia", productPrice: 21000 },
      { productId: 7, productName: "Oppo Reno", productPrice: 24000 },
      { productId: 8, productName: "Realme 9", productPrice: 16000 },
    ];
    render(<ItemList items={items} currentPage={currentPage} limit={limit} />);

    const itemElements = screen.getAllByRole("listitem", {
      className: "item-list",
    }); // Assuming Item component renders listitems

    expect(itemElements?.length).toBe(
      Math.min(limit, items.length - (currentPage - 1) * limit)
    );
  });

  it("should render 'No Items Found' message when there are no items", () => {
    render(<ItemList items={[]} currentPage={1} limit={10} />);

    const noItemsMessage = screen.getByText("No Items Found");
    expect(noItemsMessage).toBeInTheDocument();
  });

  it("should render the Item component for each item", () => {
    const items = [
      { productId: 1, productName: "Shirt", productPrice: 20000 },
      { productId: 2, productName: "Jeans", productPrice: 18000 },
    ];
    const currentPage = 1;
    const limit = 10;

    render(<ItemList items={items} currentPage={currentPage} limit={limit} />);

    const itemElements = screen.getAllByRole("listitem", {
      className: "item-list",
    }); 
    expect(itemElements.length).toBe(items.length);
  });
});
