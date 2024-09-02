import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import routes from "../router/routes";

describe("Should render NavComponent", () => {
  it("Should render NavComponent", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router}></RouterProvider>);
    screen.debug();

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    screen.debug();

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
});
