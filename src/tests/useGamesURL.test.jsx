import { beforeAll, afterAll, describe, vi, it, expect } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../router/routes";
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";

describe("Should mock the response game one object of the useEffect hook", () => {
  beforeAll(() => {
    window.fetch = vi.fn(() => {
      const games = [
        {
          id: "66d1a12dcec8c4497322b73e",
          image_link: "http://localhost:3000/dragon-charmers-island.jpg",
          game_name: "Dragon Charmer's Island",
        },
      ];

      return Promise.resolve({
        json: () => Promise.resolve(games),
      });
    });
  });

  afterAll(() => {
    window.fetch.mockRestore();
  });

  it("Should mock the game one object", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    // screen.debug();

    const fetchGames = await screen.findByText("Dragon Charmer's Island");

    expect(fetchGames).toBeInTheDocument();

    expect(fetchGames.textContent).toMatch(/Dragon Charmer's Island/i);
  });

  it("Should render Loading if the fetch is done before rendering", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").alt).toEqual("Loading...");
  });

  it("Should render Error if the fetch was not successful", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: "A network error was encountered" });
    });

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const errorMessage = await screen.findByText(
      "A network error was encountered",
    );

    expect(errorMessage).toBeInTheDocument();
  });
});

describe("Should mock the response game two object of the useEffect hook", () => {
  beforeAll(() => {
    window.fetch = vi.fn(() => {
      const games = [
        {
          id: "66dec67b9ab29781c1656ffa",
          image_link: "http://localhost:3000/super-mario-bros.jpg",
          game_name: "Super Mario Bros",
        },
      ];

      return Promise.resolve({
        json: () => Promise.resolve(games),
      });
    });
  });

  afterAll(() => {
    window.fetch.mockRestore();
  });

  it("Should mock the game two object", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    // screen.debug();

    const fetchGames = await screen.findByText("Super Mario Bros");

    expect(fetchGames).toBeInTheDocument();

    expect(fetchGames.textContent).toMatch(/Super Mario Bros/i);
  });

  it("Should render Loading if the fetch is done before rendering", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").alt).toEqual("Loading...");
  });

  it("Should render Error if the fetch was not successful", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: "A network error was encountered" });
    });

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const errorMessage = await screen.findByText(
      "A network error was encountered",
    );

    expect(errorMessage).toBeInTheDocument();
  });
});

describe("Should mock the response game three object of the useEffect hook", () => {
  beforeAll(() => {
    window.fetch = vi.fn(() => {
      const games = [
        {
          id: "66def6f6f9626a79596d3aed",
          image_link: "http://localhost:3000/universe-113.jpg",
          game_name: "Universe 113",
        },
      ];

      return Promise.resolve({
        json: () => Promise.resolve(games),
      });
    });
  });

  afterAll(() => {
    window.fetch.mockRestore();
  });

  it("Should mock the game three object", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    // screen.debug();

    const fetchGames = await screen.findByText("Universe 113");

    expect(fetchGames).toBeInTheDocument();

    expect(fetchGames.textContent).toMatch(/Universe 113/i);
  });

  it("Should render Loading if the fetch is done before rendering", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").alt).toEqual("Loading...");
  });

  it("Should render Error if the fetch was not successful", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: "A network error was encountered" });
    });

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const errorMessage = await screen.findByText(
      "A network error was encountered",
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
