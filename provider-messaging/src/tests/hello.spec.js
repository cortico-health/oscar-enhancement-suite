import { h } from "preact";
import { render } from "@testing-library/preact";
import Hello from "../components/atoms/hello";

describe("Hello World", () => {
  test("should display initial count", () => {
    const { container } = render(<Hello />);
    expect(container.textContent).toBe("Hello");
  });
});
