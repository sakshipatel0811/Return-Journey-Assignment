import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../modules/Products/components/SearchBar";

describe("SearchBar component", () => {
  it("should render the search bar input field", () => {
    render(<SearchBar />);
    const searchBarInput = screen.getByPlaceholderText(/Search.../i);
    expect(searchBarInput).toBeInTheDocument();
  });

  it("should update searchValue when the input changes", () => {
    render(<SearchBar />);
    const searchBarInput = screen.getByPlaceholderText(/Search.../i);

    const newSearchValue = "test";
    fireEvent.change(searchBarInput, { target: { value: newSearchValue } });

    expect(searchBarInput.value).toBe(newSearchValue);
  });
});
