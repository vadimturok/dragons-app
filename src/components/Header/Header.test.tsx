import {render, screen, waitFor} from "@testing-library/react";
import Header from "./Header";
import '@testing-library/jest-dom'
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AppRoutes from "../Routes/AppRoutes";
import {Provider} from "react-redux";
import {store} from '../../store'

describe('Header', () => {
    test('should navigate to home page', async () => {
        render(<MemoryRouter>
            <Provider store={store}>
                <Header/>
                <AppRoutes/>
            </Provider>
        </MemoryRouter>)
        userEvent.click(screen.getByText('Dragons App'))
        await waitFor(() => {
            expect(screen.getByRole('progressbar')).toBeInTheDocument()
        })
    })
})