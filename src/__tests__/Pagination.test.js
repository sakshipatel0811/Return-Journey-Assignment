import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Pagination from "../modules/Products/components/Pagination";

describe("Pagination component", () => {
  it("should render the correct number of page buttons", () => {
    render(<Pagination totalItems={100} limit={10} />);
    const pageButtons = screen.getAllByRole("button");

    expect(pageButtons.length).toBe(10);
  });

  it("should highlight the current page button", () => {
    render(<Pagination currentPage={3} totalItems={100} limit={10} />);
    const pageButtons = screen.getAllByRole("button");

    expect(pageButtons[2]).toHaveClass("bg-blue-950 text-white");
  });

  it("should call onPageChange when a page button is clicked", async () => {
    const onPageChangeMock = jest.fn();
    render(
      <Pagination
        currentPage={1}
        totalItems={100}
        limit={10}
        onPageChange={onPageChangeMock}
      />
    );
    const pageButtons = screen.getAllByRole("button");

    fireEvent.click(pageButtons[1]);

    await waitFor(() => {
      expect(onPageChangeMock).toHaveBeenCalledWith(2);
    });
  });

  it("should handle edge cases correctly", () => {
    // Test with 0 total items
    render(<Pagination totalItems={0} limit={10} />);

    // Test with a limit greater than total items
    render(<Pagination totalItems={10} limit={20} />);
  });
});
