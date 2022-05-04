import { render, screen, cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom";
import Expenses from "../../expenses/Expenses";
import { MemoryRouter as Router } from "react-router-dom";

describe("Expenses main page", () => {
  it("Displays the expenses main page", () => {
    render(
      <Router>
        <Expenses />
      </Router>
    );
    expect(screen.queryByText(/expenses/i)).toBeInTheDocument();
  });
});

// test("should render Expenses component", () => {
//   render(<Expenses />);

//   var algo = screen.getByTestId("customId");

//   expect(algo).toBeInTheDocument();
// });
