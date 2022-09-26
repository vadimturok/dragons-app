import {render, screen} from "@testing-library/react";
import DragonItem from "./DragonItem";
import {Dragon} from "../../types/Dragon";
import '@testing-library/jest-dom'

describe('Dragon Item', () => {
    let dragon: Dragon
    beforeAll(() => {
        dragon = {
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
        }
    })
    test('should display dragon image and name', () => {
        render(<DragonItem dragon={dragon}/>)
        expect(screen.getByAltText(dragon.name)).toBeInTheDocument()
        expect(screen.getByText(dragon.name)).toBeInTheDocument()
    })

    test('should display remove button in profile', () => {
        render(<DragonItem dragon={dragon} isProfile={true}/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})