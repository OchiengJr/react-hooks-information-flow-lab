import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("displays in 'light' mode when initialized", () => {
    expect(screen.getByRole("main")).toHaveClass("light");
  });

  test("changes to 'dark' mode when the button is clicked", () => {
    fireEvent.click(screen.getByRole("button", { name: / Mode/ }));
    expect(screen.getByRole("main")).toHaveClass("dark");
  });

  test("changes back to 'light' mode when the button is clicked twice", () => {
    fireEvent.click(screen.getByRole("button", { name: / Mode/ }));
    fireEvent.click(screen.getByRole("button", { name: / Mode/ }));
    expect(screen.getByRole("main")).toHaveClass("light");
  });
});
