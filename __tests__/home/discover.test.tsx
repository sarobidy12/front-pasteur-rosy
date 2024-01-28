import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Discover from "../../app/Home/Discover";

describe("Render enseignement", () => {
  test("render text correctly", () => {
    const { getByText } = render(<Discover />);
    const verify = getByText(
      "Decouvre tous les enseignements,sur la parole de dieu."
    );
    expect(verify).toBeInTheDocument();
  });

  test("renders links correctly", async () => {
    const { getByTestId } = render(<Discover />);

    const verify = getByTestId("redirect-enseignement");

    userEvent.click(verify);

    expect(window.location.pathname).toBe("/");
  });

  // You can add more tests as needed
});
