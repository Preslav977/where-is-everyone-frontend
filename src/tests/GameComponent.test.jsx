import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import routes from "../router/routes";

import GameComponent from "../components/GameComponent";

describe("Should render GameComponent with Dragon Charmer's Island passed props", () => {
  it("should render GameComponent with props", () => {
    const routes = [
      {
        path: "/",

        element: (
          <GameComponent
            gameImage={"http://localhost:3000/dragon-charmers-island.jpg"}
            gameImageDescription={"Dragon Charmers Island"}
            gameName={"Dragon Charmer's Island"}
            showButton={true}
            gameLink={"/66d1a12dcec8c4497322b73e"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByAltText("Dragon Charmers Island"));

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/dragon-charmers-island.jpg",
    );

    expect(screen.queryByText("Dragon Charmer's Island").textContent).toMatch(
      /Dragon Charmer's Island/i,
    );

    expect(screen.queryByText("Start Game").textContent).toMatch(/Start Game/i);
  });

  it("should render GameComponent with props and button shouldn't be rendered", () => {
    const routes = [
      {
        path: "/",

        element: (
          <GameComponent
            gameImage={"http://localhost:3000/dragon-charmers-island.jpg"}
            gameImageDescription={"Dragon Charmers Island"}
            gameName={"Dragon Charmer's Island"}
            showButton={false}
            gameLink={"/66d1a12dcec8c4497322b73e"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByAltText("Dragon Charmer's Island"));

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/dragon-charmers-island.jpg",
    );

    expect(screen.queryByText("Dragon Charmer's Island").textContent).toMatch(
      /Dragon Charmer's Island/i,
    );

    expect(screen.queryByText("Start Game")).not.toBeInTheDocument();
  });
});

describe("Should render GameComponent Super Mario Bros with passed props", () => {
  it("should render GameComponent with props", () => {
    const routes = [
      {
        path: "/",

        element: (
          <GameComponent
            gameImage={"http://localhost:3000/super-mario-bros.jpg"}
            gameImageDescription={"Dragon Charmers Island"}
            gameName={"Super Mario Bros"}
            showButton={true}
            gameLink={"/66d1a12dcec8c4497322b73e"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByAltText("Super Mario Bros"));

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/super-mario-bros.jpg",
    );

    expect(screen.queryByText("Super Mario Bros").textContent).toMatch(
      /Super Mario Bros/i,
    );

    expect(screen.queryByText("Start Game").textContent).toMatch(/Start Game/i);
  });

  it("should render GameComponent with props and button shouldn't be rendered", () => {
    const routes = [
      {
        path: "/",

        element: (
          <GameComponent
            gameImage={"http://localhost:3000/super-mario-bros.jpg"}
            gameImageDescription={"Dragon Charmers Island"}
            gameName={"Super Mario Bros"}
            showButton={false}
            gameLink={"/66dec67b9ab29781c1656ffa"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByAltText("Super Mario Bros"));

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/super-mario-bros.jpg",
    );

    expect(screen.queryByText("Super Mario Bros").textContent).toMatch(
      /Super Mario Bros/i,
    );

    expect(screen.queryByText("Start Game")).not.toBeInTheDocument();
  });
});

describe("Should render GameComponent Universe 133 with passed props ", () => {
  it("should render GameComponent with props", () => {
    const routes = [
      {
        path: "/",

        element: (
          <GameComponent
            gameImage={"http://localhost:3000/universe-133.jpg"}
            gameImageDescription={"Dragon Charmers Island"}
            gameName={"Universe 133"}
            showButton={true}
            gameLink={"/66d1a12dcec8c4497322b73e"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByAltText("Universe 133"));

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/universe-133.jpg",
    );

    expect(screen.queryByText("Universe 133").textContent).toMatch(
      /Universe 133/i,
    );

    expect(screen.queryByText("Start Game").textContent).toMatch(/Start Game/i);
  });

  it("should render GameComponent with props and button shouldn't be rendered", () => {
    const routes = [
      {
        path: "/",

        element: (
          <GameComponent
            gameImage={"http://localhost:3000/universe-133.jpg"}
            gameImageDescription={"Dragon Charmers Island"}
            gameName={"Universe 133"}
            showButton={false}
            gameLink={"/66d1a12dcec8c4497322b73e"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByAltText("Universe 133"));

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/universe-133.jpg",
    );

    expect(screen.queryByText("Universe 133").textContent).toMatch(
      /Universe 133/i,
    );

    expect(screen.queryByText("Start Game")).not.toBeInTheDocument();
  });
});
