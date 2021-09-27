import { render, screen } from "@testing-library/react";
import App from "./App";

test("App has heading", function() {
	render(<App />);
	var string = screen.getByText(/hej verden/i);
	expect(string).toBeInTheDocument();
});
