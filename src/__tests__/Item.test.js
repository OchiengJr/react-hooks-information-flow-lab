import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

describe("Item Component", () => {
  test("renders item name and category correctly", () => {
    render(<Item name="Milk" category="Dairy" />);
    expect(screen.getByText("Milk")).toBeInTheDocument();
    expect(screen.getByText("Dairy")).toBeInTheDocument();
  });

  test("does not have 'in-cart' class when initialized", () => {
    const { container } = render(<Item name="Milk" category="Dairy" />);
    const listItem = container.querySelector("li");
    expect(listItem).toBeInTheDocument();
    expect(listItem).not.toHaveClass("in-cart");
  });

  test("adds 'in-cart' class when the 'Add to Cart' button is clicked", () => {
    render(<Item name="Milk" category="Dairy" />);
    fireEvent.click(screen.getByText(/ Cart/));
    expect(screen.getByText("Milk").closest("li")).toHaveClass("in-cart");
  });

  // Add more test cases as needed
});
