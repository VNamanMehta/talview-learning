import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, vi } from "vitest";
import Pagination from "./Pagination";

describe("Pagination",() => {
    it("renders correct pagination",() => {
        render(<Pagination total={50} limit={10} currentPage={1} />)
        const pageContainers = screen.getAllByTestId('page-container')
        expect(pageContainers).toHaveLength(5)
        expect(pageContainers[0]).toHaveTextContent(1)
    })

    it("should emit clicked page",async () => {
        const user = userEvent.setup()
        const handleClick = vi.fn()
        render(<Pagination total={50} limit={10} currentPage={1} selectPage={handleClick}/>)
        const pageContainers = screen.getAllByTestId('page-container')
        await user.click(pageContainers[0])
        expect(handleClick).toHaveBeenCalledWith(1)
    })
})