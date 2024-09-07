import { beforeAll, afterAll, describe, vi, it, expect } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../router/routes";
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";

describe("Should mock the response object of useSingleGameCharacters", () => {
  beforeAll(() => {
    window.fetch = vi.fn(() => {
      const characters = [
        {
          id: "0",
          game: "66d1a12dcec8c4497322b73e",
          character_name: "Raft Man",
          character_image: "http://localhost:3000/raft-man.png",
          coordinateX: 5.117493473,
          coordinateY: 42.176823558,
          marked: false,
        },
        {
          id: "1",
          game: "66d1a12dcec8c4497322b73e",
          character_name: "Dragon",
          character_image: "http://localhost:3000/dragon.png",
          coordinateX: 66.266318538,
          coordinateY: 42.509798481,
          marked: false,
        },
        {
          id: "2",
          game: "66d1a12dcec8c4497322b73e",
          character_name: "Wizard",
          character_image: "http://localhost:3000/wizard.png",
          coordinateX: 75.874673629,
          coordinateY: 65.855040292,
          marked: false,
        },
      ];

      return Promise.resolve({
        json: () => Promise.resolve(characters),
      });
    });
  });

  afterAll(() => {
    window.fetch.mockRestore();
  });

  it("Should mock the characters with game ID 66d1a12dcec8c4497322b73e object", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/66d1a12dcec8c4497322b73e"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router}></RouterProvider>);

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByAltText("Loading..."));

    screen.debug();

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
