import { beforeAll, afterAll, describe, vi, it, expect } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../router/routes";
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";

describe("Should mock the response game one object of useSingleGameCharacters", () => {
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

describe("Should mock the response game two object of useSingleGameCharacters", () => {
  beforeAll(() => {
    window.fetch = vi.fn(() => {
      const characters = [
        {
          id: "0",
          game: "66dec67b9ab29781c1656ffa",
          character_name: "Fire Mario",
          character_image: "http://localhost:3000/fire-mario.png",
          coordinateX: 84.960835509,
          coordinateY: 45.199899773,
          marked: false,
        },
        {
          id: "1",
          game: "66dec67b9ab29781c1656ffa",
          character_name: "King Boo",
          character_image: "http://localhost:3000/king-boo.png",
          coordinateX: 31.018276762,
          coordinateY: 54.933541556,
          marked: false,
        },
        {
          id: "2",
          game: "66dec67b9ab29781c1656ffa",
          character_name: "Waluigi",
          character_image: "http://localhost:3000/waluigi.png",
          coordinateX: 71.279373368,
          coordinateY: 94.427513388,
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

  it("Should mock the characters with game ID 66dec67b9ab29781c1656ffa object", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/66dec67b9ab29781c1656ffa"],
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

describe("Should mock the response game three object of useSingleGameCharacters", () => {
  beforeAll(() => {
    window.fetch = vi.fn(() => {
      const characters = [
        {
          id: "0",
          game: "66def6f6f9626a79596d3aed",
          character_name: "Kratos",
          character_image: "http://localhost:3000/kratos.png",
          coordinateX: 46.161879896,
          coordinateY: 32.534173461,
          marked: false,
        },
        {
          id: "1",
          game: "66def6f6f9626a79596d3aed",
          character_name: "Wally",
          character_image: "http://localhost:3000/wally.png",
          coordinateX: 15.195822454,
          coordinateY: 63.665056807,
          marked: false,
        },
        {
          id: "2",
          game: "66def6f6f9626a79596d3aed",
          character_name: "Sonic",
          character_image: "http://localhost:3000/sonic.png",
          coordinateX: 72.480417755,
          coordinateY: 67.653355029,
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

  it("Should mock the characters with game ID 66def6f6f9626a79596d3aed object", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/66def6f6f9626a79596d3aed"],
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

    const characterKratosImg = screen.queryAllByRole("img");

    const characterKratosoName = screen.queryAllByText("Kratos");

    expect(characterKratosImg[0].alt).toEqual("Game Characters");

    expect(characterKratosImg[0].src).toEqual(
      "http://localhost:3000/kratos.png",
    );

    expect(characterKratosoName[0].textContent).toEqual("Kratos");

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
