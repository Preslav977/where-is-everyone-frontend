import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Dialog from "../components/Dialog";

describe("Should render Dialog component", () => {
  it("Should render Dialog component", async () => {
    const routes = [
      {
        path: "/",

        element: <Dialog playerScore={"5s"} />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.queryByRole("h3", { name: "You finished in 5s!" }));

    expect(
      screen.queryByText("Submit your score to the leaderboard").textContent,
    ).toMatch(/Submit your score to the leaderboard/i);

    expect(screen.queryByRole("label", { name: "Username" }));

    expect(screen.queryByRole("button", { name: "Submit" }));
  });
});
