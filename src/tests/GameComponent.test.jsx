import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import routes from "../router/routes";

import GameComponent from "../components/GameComponent";

describe("Should render GameComponent", () => {
  it("should render GameComponent with props", () => {
    const routes = [
      {
        path: "/",

        element: (
          <GameComponent
            gameImage={"http://localhost:3000/dragon-charmers-island.jpg"}
            gameImageDescription={"Dragon Charmers Island"}
            gameName={"Dragon Charmers Island"}
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

    expect(screen.queryByText("Dragon Charmers Island").textContent).toMatch(
      /Dragon Charmers Island/i,
    );

    expect(screen.queryByText("Start Game").textContent).toMatch(/Start Game/i);
  });

  it("should render GameComponent with props and button shouldnt be rendered", () => {
    const routes = [
      {
        path: "/",

        element: (
          <GameComponent
            gameImage={"http://localhost:3000/dragon-charmers-island.jpg"}
            gameImageDescription={"Dragon Charmers Island"}
            gameName={"Dragon Charmers Island"}
            showButton={false}
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

    expect(screen.queryByText("Dragon Charmers Island").textContent).toMatch(
      /Dragon Charmers Island/i,
    );

    expect(screen.queryByText("Start Game")).not.toBeInTheDocument();
  });
});
