import { beforeAll, afterAll, describe, vi, it, expect } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../router/routes";
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";

describe("Should mock the response object of useSingleGameURL hook", () => {
  beforeAll(() => {
    window.fetch = vi.fn(() => {
      const game = [
        {
          id: "66d1a12dcec8c4497322b73e",
          image_link: "http://localhost:3000/dragon-charmers-island.jpg",
          game_name: "Dragon Charmers Island",
        },
      ];

      return Promise.resolve({
        json: () => Promise.resolve(game),
      });
    });
  });

  afterAll(() => {
    window.fetch.mockRestore();
  });

  it("Should mock the game with ID 66d1a12dcec8c4497322b73e object", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    // screen.debug();

    const fetchGames = await screen.findByText("Dragon Charmers Island");

    expect(fetchGames).toBeInTheDocument();

    expect(fetchGames.textContent).toMatch(/Dragon Charmers Island/i);
  });

  it("Should render loading if the fetch is done before rendering", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

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
