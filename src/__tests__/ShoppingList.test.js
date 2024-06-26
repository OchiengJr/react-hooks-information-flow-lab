import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

describe("ShoppingList Component", () => {
  test("displays all items when initially rendered", () => {
    render(<ShoppingList items={testData} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(testData.length);
  });

  test("displays only items that match the selected category", () => {
    render(<ShoppingList items={testData} />);
    
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Dairy" } });
    let items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Dessert" } });
    items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(1);
  });
});
