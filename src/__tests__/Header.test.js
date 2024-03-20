import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("renders the header component", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("displays the toggle button", () => {
    render(<Header />);
    expect(screen.queryByText(/ Mode/)).toBeInTheDocument();
  });

  test("calls the onDarkModeClick callback prop when the button is clicked", () => {
    // Mock callback function
    const onDarkModeClick = jest.fn();

    // Render Header component with the mock callback
    render(<Header onDarkModeClick={onDarkModeClick} />);

    // Simulate button click
    fireEvent.click(screen.queryByText(/ Mode/));

    // Verify that the callback is invoked
    expect(onDarkModeClick).toHaveBeenCalled();
  });
});
