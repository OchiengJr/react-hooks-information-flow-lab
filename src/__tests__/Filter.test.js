import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

describe("Filter Component", () => {
  test("renders the <select> element", () => {
    render(<Filter />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("invokes the onCategoryChange callback prop when the category is changed", () => {
    // Mock callback function
    const onCategoryChange = jest.fn();

    // Render Filter component with the mock callback
    render(<Filter onCategoryChange={onCategoryChange} />);

    // Simulate a category change
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Dairy" } });

    // Verify that the callback is invoked with the correct arguments
    expect(onCategoryChange).toHaveBeenCalledWith("Dairy");
  });
});
