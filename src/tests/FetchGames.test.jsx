import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import routes from "../router/routes";
import userEvent from "@testing-library/user-event";

describe("Should render FetchGames", () => {
  it("Should render loading if the fetch is done before rendering", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByRole("img").alt).toEqual("Loading...");
  });

  it("Should render all FetchGames", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

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

    expect(screen.queryByText("Dragon Charmer's Island").textContent).toMatch(
      /Dragon Charmer's Island/i,
    );

    expect(screen.queryAllByText("Start Game")[0].textContent).toMatch(
      /Start Game/i,
    );

    expect(screen.queryByText("Super Mario Bros").textContent).toMatch(
      /Super Mario Bros/i,
    );

    expect(screen.queryAllByText("Start Game")[1].textContent).toMatch(
      /Start Game/i,
    );

    expect(screen.queryByText("Universe 113").textContent).toMatch(
      /Universe 113/i,
    );

    expect(screen.queryAllByText("Start Game")[2].textContent).toMatch(
      /Start Game/i,
    );
  });

  it("Should navigate to Leaderboard Link", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    // screen.debug();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

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

    expect(screen.queryByText("Dragon Charmer's Island").textContent).toMatch(
      /Dragon Charmer's Island/i,
    );

    expect(screen.queryAllByText("Start Game")[0].textContent).toMatch(
      /Start Game/i,
    );

    expect(screen.queryByText("Super Mario Bros").textContent).toMatch(
      /Super Mario Bros/i,
    );

    expect(screen.queryAllByText("Start Game")[1].textContent).toMatch(
      /Start Game/i,
    );

    expect(screen.queryByText("Universe 113").textContent).toMatch(
      /Universe 113/i,
    );

    expect(screen.queryAllByText("Start Game")[2].textContent).toMatch(
      /Start Game/i,
    );
  });

  it("Should navigate to Game on clicking the Start Game button", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/66d1a12dcec8c4497322b73e"],
      initialIndex: 1,
    });
    render(<RouterProvider router={router}></RouterProvider>);
    // screen.debug();

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    // screen.debug();

    expect(screen.queryByText("Character").textContent).toMatch(/Character/i);

    expect(screen.queryByText("Hunt").textContent).toMatch(/Hunt/i);

    expect(screen.queryByText("00:00:000").textContent).toMatch(/00:00:000/);

    const characterRaftManImg = screen.queryAllByRole("img");

    const characterRaftManName = screen.queryAllByText("Raft Man");

    expect(characterRaftManImg[0].alt).toEqual("Game Characters");

    expect(characterRaftManImg[0].src).toEqual(
      "http://localhost:3000/raft-man.png",
    );

    expect(characterRaftManName[0].textContent).toEqual("Raft Man");

    const characterDragonImg = screen.queryAllByRole("img");

    const characterDragonName = screen.queryAllByText("Dragon");

    expect(characterDragonImg[1].alt).toEqual("Game Characters");

    expect(characterDragonImg[1].src).toEqual(
      "http://localhost:3000/dragon.png",
    );

    expect(characterDragonName[1].textContent).toEqual("Dragon");

    const characterWizardImg = screen.queryAllByRole("img");

    const characterWizardName = screen.queryAllByText("Wizard");

    expect(characterWizardImg[2].alt).toEqual("Game Characters");

    expect(characterWizardImg[2].src).toEqual(
      "http://localhost:3000/wizard.png",
    );

    expect(characterWizardName[2].textContent).toEqual("Wizard");

    expect(screen.queryByText(3).textContent).toEqual("3");
  });

  it("Should navigate to Super Mario Bros on clicking the Start Game button", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/66dec67b9ab29781c1656ffa"],
      initialIndex: 1,
    });
    render(<RouterProvider router={router}></RouterProvider>);
    // screen.debug();

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    // screen.debug();

    expect(screen.queryByText("Character").textContent).toMatch(/Character/i);

    expect(screen.queryByText("Hunt").textContent).toMatch(/Hunt/i);

    expect(screen.queryByText("00:00:000").textContent).toMatch(/00:00:000/);

    const characterFireMarioImg = screen.queryAllByRole("img");

    const characterFireMarioName = screen.queryAllByText("Fire Mario");

    expect(characterFireMarioImg[0].alt).toEqual("Game Characters");

    expect(characterFireMarioImg[0].src).toEqual(
      "http://localhost:3000/fire-mario.png",
    );

    expect(characterFireMarioName[0].textContent).toEqual("Fire Mario");

    const characterKingBooImg = screen.queryAllByRole("img");

    const characterKingBooName = screen.queryAllByText("King Boo");

    expect(characterKingBooImg[1].alt).toEqual("Game Characters");

    expect(characterKingBooImg[1].src).toEqual(
      "http://localhost:3000/king-boo.png",
    );

    expect(characterKingBooName[1].textContent).toEqual("King Boo");

    const characterWaluigiImg = screen.queryAllByRole("img");

    const characterWaluigiName = screen.queryAllByText("Waluigi");

    expect(characterWaluigiImg[2].alt).toEqual("Game Characters");

    expect(characterWaluigiImg[2].src).toEqual(
      "http://localhost:3000/waluigi.png",
    );

    expect(characterWaluigiName[2].textContent).toEqual("Waluigi");

    expect(screen.queryByText(3).textContent).toEqual("3");
  });

  it("Should navigate to Universe 113 on clicking the Start Game button", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/66def6f6f9626a79596d3aed"],
      initialIndex: 1,
    });
    render(<RouterProvider router={router}></RouterProvider>);
    // screen.debug();

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    screen.debug();

    expect(screen.queryByText("Character").textContent).toMatch(/Character/i);

    expect(screen.queryByText("Hunt").textContent).toMatch(/Hunt/i);

    expect(screen.queryByText("00:00:000").textContent).toMatch(/00:00:000/);

    const characterKratosImg = screen.queryAllByRole("img");

    const characterKratosName = screen.queryAllByText("Kratos");

    expect(characterKratosImg[0].alt).toEqual("Game Characters");

    expect(characterKratosImg[0].src).toEqual(
      "http://localhost:3000/kratos.png",
    );

    expect(characterKratosName[0].textContent).toEqual("Kratos");

    const characterWallyImg = screen.queryAllByRole("img");

    const characterWallyName = screen.queryAllByText("Wally");

    expect(characterWallyImg[1].alt).toEqual("Game Characters");

    expect(characterWallyImg[1].src).toEqual("http://localhost:3000/wally.png");

    expect(characterWallyName[1].textContent).toEqual("Wally");

    const characterSonicImg = screen.queryAllByRole("img");

    const characterSonicName = screen.queryAllByText("Sonic");

    expect(characterSonicImg[2].alt).toEqual("Game Characters");

    expect(characterSonicImg[2].src).toEqual("http://localhost:3000/sonic.png");

    expect(characterSonicName[2].textContent).toEqual("Sonic");

    expect(screen.queryByText(3).textContent).toEqual("3");
  });
});
