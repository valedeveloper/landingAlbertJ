// ItemMenu.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ItemMenu from "./components/ItemLink/ItemLink";

// Mock para la función scrollToSection
const mockScrollToSection = jest.fn();

const itemProps = {
  sectionId: "home",
  title: "Inicio",
  className: "navbar-link",
  scrollToSection: mockScrollToSection,
};

test("renders ItemMenu component with correct content and class", () => {
  const { getByText, getByTestId } = render(<ItemMenu {...itemProps} />);

  // Verificar que el título y la clase se rendericen correctamente
  const buttonElement = getByText("Inicio");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("navbar-link");
});

test("calls scrollToSection function when button is clicked", () => {
  const { getByTestId } = render(<ItemMenu {...itemProps} />);

  // Obtener el botón y simular un clic
  const buttonElement = getByTestId("item-menu-button");
  fireEvent.click(buttonElement);

  // Verificar que la función scrollToSection se haya llamado con el sectionId correcto
  expect(mockScrollToSection).toHaveBeenCalledWith("home");
});
