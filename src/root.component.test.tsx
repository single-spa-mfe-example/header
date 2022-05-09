import { render, screen } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    render(<Root name="Testapp" />);
    expect(screen.getByText(/Example App/i)).toBeInTheDocument();
  });
});
