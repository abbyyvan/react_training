import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders SearchBar component and handles input", () => {
  const mockOnSubmit = jest.fn();
  render(<SearchBar onSubmit={mockOnSubmit} />);

  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByText(/submit/i);

  fireEvent.change(inputElement, { target: { value: "React" } });
  fireEvent.click(buttonElement);

  expect(mockOnSubmit).toHaveBeenCalledWith("React");
});
