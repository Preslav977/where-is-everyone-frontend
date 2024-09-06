import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import routes from "../router/routes";
import userEvent from "@testing-library/user-event";

describe("Should render FetchSingleGame", () => {
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

    expect(characterRaftManImg[0].alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(characterRaftManImg[0].src).toEqual(
      "http://localhost:3000/raft-man.png",
    );

    expect(characterRaftManName[0].textContent).toEqual("Raft Man");

    const characterDragonImg = screen.queryAllByRole("img");

    const characterDragonName = screen.queryAllByText("Dragon");

    expect(characterDragonImg[1].alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(characterDragonImg[1].src).toEqual(
      "http://localhost:3000/dragon.png",
    );

    expect(characterDragonName[1].textContent).toEqual("Dragon");

    const characterWizardImg = screen.queryAllByRole("img");

    const characterWizardName = screen.queryAllByText("Wizard");

    expect(characterWizardImg[2].alt).toEqual(
      "Dragon Charmers Island Characters",
    );

    expect(characterWizardImg[2].src).toEqual(
      "http://localhost:3000/wizard.png",
    );

    expect(characterWizardName[2].textContent).toEqual("Wizard");

    expect(screen.queryByText(3).textContent).toEqual("3");
  });

  it("Should click on the main image and show the drop-down menu", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/66d1a12dcec8c4497322b73e"],
      initialIndex: 1,
    });
    render(<RouterProvider router={router} />);
    // screen.debug();

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    const mainImg = screen.queryByTestId("main-img");

    const user = userEvent.setup();

    await user.click(mainImg);

    screen.debug();

    expect(mainImg.src).toEqual(
      "http://localhost:3000/dragon-charmers-island.jpg",
    );
  });
});
