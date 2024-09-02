import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import routes from "../router/routes";
import userEvent from "@testing-library/user-event";

describe("Should render NavComponent", () => {
  it("Should render NavComponent", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router}></RouterProvider>);
    // screen.debug();

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    // screen.debug();

    expect(screen.queryByText("Character").textContent).toMatch(/Character/i);

    expect(screen.queryByText("Hunt").textContent).toMatch(/Hunt/i);

    expect(screen.queryByText("Leaderboard").textContent).toMatch(
      /Leaderboard/i,
    );

    expect(screen.queryByText("Games").textContent).toMatch(/Games/i);

    expect(screen.queryByText("Leaderboard").textContent).toMatch(
      /Leaderboard/i,
    );

    expect(screen.queryByText("Dragon Charmers Island").textContent).toMatch(
      /Dragon Charmers Island/i,
    );

    expect(screen.queryByText("Start Game").textContent).toMatch(/Start Game/i);
  });

  it("Should NavComponent navigate to Leaderboard Link", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router}></RouterProvider>);
    // screen.debug();

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    // screen.debug();

    const user = userEvent.setup();

    const LeaderboardLink = screen.queryByText("Leaderboard");

    await user.click(LeaderboardLink);

    // screen.debug();

    expect(screen.queryByText("Character").textContent).toMatch(/Character/i);

    expect(screen.queryByText("Hunt").textContent).toMatch(/Hunt/i);

    expect(screen.queryByText("Leaderboard").textContent).toMatch(
      /Leaderboard/i,
    );

    expect(screen.queryByText("Games").textContent).toMatch(/Games/i);

    expect(screen.queryByText("Leaderboard").textContent).toMatch(
      /Leaderboard/i,
    );

    expect(screen.queryByText("Dragon Charmers Island").textContent).toMatch(
      /Dragon Charmers Island/i,
    );

    expect(screen.queryByText("Start Game").textContent).toMatch(/Start Game/i);
  });

  it("Should navigate to Game on clicking the Start Game button", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/66d1a12dcec8c4497322b73e"],
      initialIndex: 0,
    });
    render(<RouterProvider router={router}></RouterProvider>);
    // screen.debug();

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    const user = userEvent.setup();

    const startGameButton = screen.getByTestId("start-game");

    console.log(startGameButton);

    // screen.debug();

    // await user.click(screen.findByTestId("start-game"));

    await user.click(startGameButton);

    // expect(startGameButton).toHaveBeenCalledOnce();

    screen.debug();
  });
});
