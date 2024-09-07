import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import MainComponent from "../components/MainComponent";

describe("Should render MainComponent", () => {
  it("Should render MainComponent with props", () => {
    const routes = [
      {
        path: "/",

        element: (
          <MainComponent
            className={"mainContainer"}
            position={"fixed"}
            gameImageSrc={"http://localhost:3000/dragon-charmers-island.jpg"}
            gameImageDescription={"Dragon Charmers Island"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    const mainElement = screen.queryByRole("main");

    expect(mainElement, { name: "mainContainer" });

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/dragon-charmers-island.jpg",
    );

    expect(screen.queryByRole("img").alt).toEqual("Dragon Charmers Island");
  });
});
