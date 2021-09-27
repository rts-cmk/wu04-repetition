import { render, screen } from "@testing-library/react";
import Dims from "./Dims";

test("has a heading", function() {
	render(<Dims heading="flergh" />);
	var string = screen.getByText(/flergh/i);
	expect(string).toBeInTheDocument();
});
