import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import routes from "../router/routes";
import userEvent from "@testing-library/user-event";

describe("Should render FetchGames", () => {
  // it("Should render FetchGames", async () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/"],
  //   });
  //   render(<RouterProvider router={router}></RouterProvider>);

  //   const apiLoading = screen.queryByTestId("loading");

  //   expect(apiLoading).toBeInTheDocument();

  //   await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

  //   // screen.debug();

  //   expect(screen.queryByText("Character").textContent).toMatch(/Character/i);

  //   expect(screen.queryByText("Hunt").textContent).toMatch(/Hunt/i);

  //   expect(screen.queryByText("Leaderboard").textContent).toMatch(
  //     /Leaderboard/i,
  //   );

  //   expect(screen.queryByText("Games").textContent).toMatch(/Games/i);

  //   expect(screen.queryByText("Leaderboard").textContent).toMatch(
  //     /Leaderboard/i,
  //   );

  //   expect(screen.queryByText("Dragon Charmers Island").textContent).toMatch(
  //     /Dragon Charmers Island/i,
  //   );

  //   expect(screen.queryByText("Start Game").textContent).toMatch(/Start Game/i);
  // });

  // it("Should navigate to Leaderboard Link", async () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/"],
  //   });
  //   render(<RouterProvider router={router}></RouterProvider>);
  //   // screen.debug();

  //   const apiLoading = screen.queryByTestId("loading");

  //   expect(apiLoading).toBeInTheDocument();

  //   await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

  //   // screen.debug();

  //   const user = userEvent.setup();

  //   const LeaderboardLink = screen.queryByText("Leaderboard");

  //   await user.click(LeaderboardLink);

  //   // screen.debug();

  //   expect(screen.queryByText("Character").textContent).toMatch(/Character/i);

  //   expect(screen.queryByText("Hunt").textContent).toMatch(/Hunt/i);

  //   expect(screen.queryByText("Leaderboard").textContent).toMatch(
  //     /Leaderboard/i,
  //   );

  //   expect(screen.queryByText("Games").textContent).toMatch(/Games/i);

  //   expect(screen.queryByText("Leaderboard").textContent).toMatch(
  //     /Leaderboard/i,
  //   );

  //   expect(screen.queryByText("Dragon Charmers Island").textContent).toMatch(
  //     /Dragon Charmers Island/i,
  //   );

  //   expect(screen.queryByText("Start Game").textContent).toMatch(/Start Game/i);
  // });

  it("Should navigate to Game on clicking the Start Game button", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/66d1a12dcec8c4497322b73e"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    // const apiLoading = screen.queryByTestId("loading");

    // expect(apiLoading).toBeInTheDocument();

    // await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    // const user = userEvent.setup();

    // const startGameButton = screen.queryByTestId("test");

    // console.log(startGameButton);

    // await user.click(startGameButton);

    screen.debug();
  });
});
