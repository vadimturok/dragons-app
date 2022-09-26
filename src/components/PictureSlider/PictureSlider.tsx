import React, {FC, useState} from 'react';
import styles from './pictureslider.module.scss'

const PictureSlider: FC<{images: string[]}> = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const setPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const setNext = () => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const setSlide = (index: number) => {
        setCurrentIndex(index)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.arrowButtons}>
                <div className={styles.arrow} onClick={setPrevious}>🡠</div>
                <div className={styles.arrow} onClick={setNext}>🡢</div>
            </div>
            <img data-testid={'slide-image'} className={styles.sliderImage} src={images[currentIndex]} alt={images[currentIndex]}/>
            <div className={styles.dotsWrapper}>
                {images.map((image, index) => (
                    <div
                        onClick={() => setSlide(index)}
                        className={styles.dot}
                        key={image}
                        style={{color: index === currentIndex ? 'dodgerblue' : 'gray'}}
                    >•</div>
                ))}
            </div>
        </div>
    );
};

export default PictureSlider;