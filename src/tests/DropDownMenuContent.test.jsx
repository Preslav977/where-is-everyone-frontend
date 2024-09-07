import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import DropDownMenuContent from "../components/DropDownMenuContent";

describe("Should render DropDownMenuComponent", () => {
  it("Should render DropDownMenuComponent Raft Man Character", () => {
    const routes = [
      {
        path: "/",

        element: (
          <DropDownMenuContent
            characterImageSrc={"http://localhost:3000/raft-man.png"}
            characterImageDescription={"Dragon Charmers Island Characters"}
            characterName={"Raft Man"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/raft-man.png",
    );

    expect(screen.queryByRole("img").alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(screen.queryByText("Raft Man"));
  });

  it("Should render DropDownMenuComponent Dragon Character", () => {
    const routes = [
      {
        path: "/",

        element: (
          <DropDownMenuContent
            characterImageSrc={"http://localhost:3000/dragon.png"}
            characterImageDescription={"Dragon Charmers Island Characters"}
            characterName={"Dragon"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/dragon.png",
    );

    expect(screen.queryByRole("img").alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(screen.queryByText("Dragon"));
  });

  it("Should render DropDownMenuComponent Wizard Character", () => {
    const routes = [
      {
        path: "/",

        element: (
          <DropDownMenuContent
            characterImageSrc={"http://localhost:3000/wizard.png"}
            characterImageDescription={"Dragon Charmers Island Characters"}
            characterName={"Wizard"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/wizard.png",
    );

    expect(screen.queryByRole("img").alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(screen.queryByText("Wizard"));
  });
});
