import { render, screen } from "@testing-library/react";
import App from "./App";

// Importa los componentes que se utilizan en App
import Header from "./components/Header/Header.tsx";
import Intro from "./views/Intro/Intro.tsx";
import Service from "./views/Service/Service.tsx";
import CallAction from "./views/CallAction/CallAction.tsx";
import About from "./views/About/About.tsx";
import Contact from "./views/ContactUs/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import TopButton from "./components/TopButton/TopButton.tsx";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton.tsx";

// Importa el hook useScroll
import { useScroll } from "./hooks/useScroll.ts";

// Mock del hook useScroll
jest.mock("./hooks/useScroll.ts", () => ({
  useScroll: jest.fn(),
}));

describe("App component", () => {
  // Antes de cada prueba, limpia los mocks y establece el comportamiento del hook useScroll
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders App component with all subcomponents", () => {
    // Simula que el hook useScroll retorna isScroll = true
    useScroll.mockReturnValueOnce({ isScroll: true });

    // Renderiza la aplicación
    render(<App />);

    // Verifica que cada componente esté presente en la pantalla
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("intro")).toBeInTheDocument();
    expect(screen.getByTestId("service")).toBeInTheDocument();
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(screen.getByTestId("callAction")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("topButton")).toBeInTheDocument();
    expect(screen.queryByTestId("whatsAppButton")).not.toBeInTheDocument(); // Comprueba que no haya botón de WhatsApp cuando isScroll es true
  });

  test("renders App component with WhatsAppButton when isScroll is false", () => {
    // Simula que el hook useScroll retorna isScroll = false
    useScroll.mockReturnValueOnce({ isScroll: false });

    // Renderiza la aplicación
    render(<App />);

    // Verifica que el componente de WhatsAppButton esté presente en la pantalla
    expect(screen.getByTestId("whatsAppButton")).toBeInTheDocument();
    expect(screen.queryByTestId("topButton")).not.toBeInTheDocument(); // Comprueba que no haya botón de Top cuando isScroll es false
  });
});
