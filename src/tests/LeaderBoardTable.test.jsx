import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import LeaderBoardTable from "../components/api/LeaderBoardTable";

describe("Should render LeaderBoardTable component", () => {
  it("Should render LeaderBoardTable component", () => {
    const routes = [
      {
        path: "/",

        element: <LeaderBoardTable />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.queryByRole("table"));

    expect(screen.queryByRole("thead"));

    expect(screen.queryByRole("tr"));

    expect(screen.queryByRole("td", { name: "Place" }));

    expect(screen.queryByRole("td", { name: "Username" }));

    expect(screen.queryByRole("td", { name: "Score" }));

    expect(screen.queryByRole("td", { name: "Date" }));

    expect(screen.queryByRole("tbody"));
  });
});
