import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import routes from "../router/routes";
import userEvent from "@testing-library/user-event";
import FetchSingleGame from "../components/api/FetchSingleGame";

describe("test", () => {
  it("Should navigate to Game on clicking the Start Game button", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/66d1a12dcec8c4497322b73e"],
      initialIndex: 1,
    });

    // const routes = [
    //   {
    //     path: "/66d1a12dcec8c4497322b73e",

    //     element: <FetchSingleGame />,
    //   },
    // ];

    // const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByAltText("Loading...");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() =>
      screen.queryAllByAltText("Loading..."),
    );

    screen.debug();
  });
});
