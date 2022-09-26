import {Dragon} from "../../types/Dragon";
import {render, screen, waitFor} from "@testing-library/react";
import DragonDetails from "./DragonDetails";
import '@testing-library/jest-dom'

describe('Dragon Details', () => {
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
        },{
             id: '1234ff',
             dry_mass_kg: 1200,
             first_flight: '21-01-2001',
             flickr_images: ['https://i.imgur.com/9fWdwNv.jpg'],
             description: 'description',
             wikipedia: 'link',
             diameter: {
                 meters: 12,
                 feet: 1
             },
             name: 'dragon 2'
         }]
    })

    test('should render dragon info', async () => {
        render(<DragonDetails dragon={dragons[0]}/>)
        const nameElem = screen.getByText(dragons[0].name)
        const wikipediaElem = screen.getByTestId('wiki-link')
        const descriptionElem = screen.getByText(dragons[0].description)
        const massElem = screen.getByText(`Mass: ${dragons[0].dry_mass_kg} kg`)
        const firstFlight = screen.getByText(`Launch: ${dragons[0].first_flight}`)
        const metersElem = screen.getByText(`Height: ${dragons[0].diameter.meters} m`)

        await waitFor(() => {
            expect(nameElem).toBeDefined()
        })
        await waitFor(() => {
            expect(wikipediaElem).toBeDefined()
        })
        await waitFor(() => {
            expect(descriptionElem).toBeDefined()
        })
        await waitFor(() => {
            expect(massElem).toBeDefined()
        })
        await waitFor(() => {
            expect(firstFlight).toBeDefined()
        })
        await waitFor(() => {
            expect(metersElem).toBeDefined()
        })

    })
})