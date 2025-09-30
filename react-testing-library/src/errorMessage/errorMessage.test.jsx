import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import ErrorMessage from "./errorMessage";

describe("errorMessage",() => {
    it("renders default error state",() => {
        render(<ErrorMessage /> )
        expect(screen.getByTestId("message-container")).toHaveTextContent("went")
    })
    it("renders custom error state",() => {
        render(<ErrorMessage message="Nothing went wrong" /> )
        expect(screen.getByTestId("message-container")).toHaveTextContent("Nothing went wrong")
    })
})