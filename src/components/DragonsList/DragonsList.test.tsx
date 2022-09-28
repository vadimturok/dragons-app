import {render, screen} from "@testing-library/react";
import DragonsList from "./DragonsList";
import {Dragon} from "../../types/Dragon";
import '@testing-library/jest-dom'
import {Provider} from "react-redux";
import {store} from '../../store'

describe('Dragons List', () => {
    let dragons: Dragon[]
    beforeAll(() => {
        dragons = [{
            id: '123ff',
            dry_mass_kg: 1200,
            first_flight: '21-01-2001',
            flickr_images: ['https://i.imgur.com/9fWdwNv.jpg'],
            description: 'description',
            wikipedia: 'link',
            diameter: {
                meters: 12,
                feet: 1
            },
            name: 'dragon 1'
        }]
    })
    test('should display dragons list', () => {
        const mockFn = jest.fn()
        mockFn.mockImplementation((dragon: Dragon) => {})
        render(
            <Provider store={store}>
                <DragonsList dragons={dragons} setDisplayDragon={mockFn}/>
            </Provider>
        )

        expect(screen.getByText(dragons[0].name)).toBeInTheDocument()
    })
})