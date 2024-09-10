import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import DropDownMenuContent from "../components/DropDownMenuContent";

describe("Should render DropDownMenuComponent Dragon Charmer's Island", () => {
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

describe("Should render DropDownMenuComponent Super Mario Bros", () => {
  it("Should render DropDownMenuComponent Fire Mario", () => {
    const routes = [
      {
        path: "/",

        element: (
          <DropDownMenuContent
            characterImageSrc={"http://localhost:3000/fire-mario.png"}
            characterImageDescription={"Dragon Charmers Island Characters"}
            characterName={"Fire Mario"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/fire-mario.png",
    );

    expect(screen.queryByRole("img").alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(screen.queryByText("Fire Mario"));
  });

  it("Should render DropDownMenuComponent King Boo Character", () => {
    const routes = [
      {
        path: "/",

        element: (
          <DropDownMenuContent
            characterImageSrc={"http://localhost:3000/king-boo.png"}
            characterImageDescription={"Dragon Charmers Island Characters"}
            characterName={"King Boo"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/king-boo.png",
    );

    expect(screen.queryByRole("img").alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(screen.queryByText("King Boo"));
  });

  it("Should render DropDownMenuComponent Waluigi Character", () => {
    const routes = [
      {
        path: "/",

        element: (
          <DropDownMenuContent
            characterImageSrc={"http://localhost:3000/waluigi.png"}
            characterImageDescription={"Dragon Charmers Island Characters"}
            characterName={"Waluigi"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/waluigi.png",
    );

    expect(screen.queryByRole("img").alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(screen.queryByText("Waluigi"));
  });
});

describe("Should render DropDownMenuComponent Universe 133", () => {
  it("Should render DropDownMenuComponent Kratos", () => {
    const routes = [
      {
        path: "/",

        element: (
          <DropDownMenuContent
            characterImageSrc={"http://localhost:3000/kratos.png"}
            characterImageDescription={"Dragon Charmers Island Characters"}
            characterName={"Kratos"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/kratos.png",
    );

    expect(screen.queryByRole("img").alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(screen.queryByText("Kratos"));
  });

  it("Should render DropDownMenuComponent Wally Character", () => {
    const routes = [
      {
        path: "/",

        element: (
          <DropDownMenuContent
            characterImageSrc={"http://localhost:3000/wally.png"}
            characterImageDescription={"Dragon Charmers Island Characters"}
            characterName={"Wally"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/wally.png",
    );

    expect(screen.queryByRole("img").alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(screen.queryByText("Wally"));
  });

  it("Should render DropDownMenuComponent Sonic Character", () => {
    const routes = [
      {
        path: "/",

        element: (
          <DropDownMenuContent
            characterImageSrc={"http://localhost:3000/sonic.png"}
            characterImageDescription={"Dragon Charmers Island Characters"}
            characterName={"Sonic"}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").src).toEqual(
      "http://localhost:3000/sonic.png",
    );

    expect(screen.queryByRole("img").alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(screen.queryByText("Sonic"));
  });
});
