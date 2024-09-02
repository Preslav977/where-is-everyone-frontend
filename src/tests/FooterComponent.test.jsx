import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import FooterComponent from "../components/FooterComponent";

describe("Should test FooterComponent", () => {
  it("should render FooterComponent", () => {
    const routes = [
      {
        path: "/",

        element: <FooterComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
