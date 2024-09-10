import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import MainComponent from "../components/MainComponent";

describe("Should render MainComponent", () => {
  it("Should render MainComponent Dragon Charmer's Island with props", () => {
    const routes = [
      {
        path: "/",

        element: (
          <MainComponent
            className={"mainContainer"}
            position={"fixed"}
            gameImageSrc={"http://localhost:3000/dragon-charmers-island.jpg"}
            gameImageDescription={"Dragon Charmer's Island"}
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

    expect(screen.queryByRole("img").alt).toEqual("Dragon Charmer's Island");
  });

  it("Should render MainComponent Super Mario Bros with props", () => {
    const routes = [
      {
        path: "/",

        element: (
          <MainComponent
            className={"mainContainer"}
            position={"fixed"}
            gameImageSrc={"http://localhost:3000/super-mario-bros.jpg"}
            gameImageDescription={"Super Mario Bros"}
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
      "http://localhost:3000/super-mario-bros.jpg",
    );

    expect(screen.queryByRole("img").alt).toEqual("Super Mario Bros");
  });

  it("Should render MainComponent Universe 113 with props", () => {
    const routes = [
      {
        path: "/",

        element: (
          <MainComponent
            className={"mainContainer"}
            position={"fixed"}
            gameImageSrc={"http://localhost:3000/universe-113.jpg"}
            gameImageDescription={"Universe 113"}
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
      "http://localhost:3000/universe-113.jpg",
    );

    expect(screen.queryByRole("img").alt).toEqual("Universe 113");
  });
});
