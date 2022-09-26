import {render, screen} from "@testing-library/react";
import AppRoutes from "./AppRoutes";
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom'


describe('Pages routing', () => {

    test('Login page', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AppRoutes/>
            </MemoryRouter>
        )
        expect(screen.getByText('Continue with Google')).toBeInTheDocument()
    })

    test('Not Found Page', () => {
        render(
            <MemoryRouter initialEntries={['/dfdfdfdf']}>
            <AppRoutes/>
        </MemoryRouter>
        )
        expect(screen.getByText('Not Found')).toBeInTheDocument()
    })
})