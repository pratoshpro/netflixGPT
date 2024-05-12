import { render, screen } from "@testing-library/react";
import UserAvatar from "../UserAvatar";
import "@testing-library/jest-dom";
describe("UserAvatar component", () => {
  it("should render UserAvatar component", () => {
    render(<UserAvatar name="pratosh" />);
    const firstLetter = screen.getByText("P");
    expect(firstLetter).toBeInTheDocument();
  });
});
