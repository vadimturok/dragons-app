import {render, screen} from "@testing-library/react";
import PictureSlider from "./PictureSlider";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

describe('Picture Slider', () => {
    let images: string[]
    beforeEach(() => {
        images = [
            'https://i.imgur.com/9fWdwNv.jpg',
            'https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg'
        ]
    })
    test('should display images', () => {
        render(<PictureSlider images={images}/>)

        const image = screen.getByTestId('slide-image') as HTMLImageElement
        expect(image.src).toBe(images[0])
    })

    test('should display next or previous image', () => {
        render(<PictureSlider images={images}/>)

        userEvent.click(screen.getByText('🡢'))
        const image = screen.getByTestId('slide-image') as HTMLImageElement
        expect(image.src).toBe(images[1])
    })
})