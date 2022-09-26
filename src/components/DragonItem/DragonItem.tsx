import React, {FC} from 'react';
import styles from "./dragonitem.module.scss";
import {Dragon} from "../../types/Dragon";

interface DragonItemProps{
    dragon: Dragon
    setDisplayDragon?: (dragon: Dragon) => void;
    isProfile?: boolean;
    removeFromFavorites?: () => void;
}

const DragonItem: FC<DragonItemProps> = ({dragon, setDisplayDragon, isProfile, removeFromFavorites}) => {
    return (
        <div key={dragon.id} className={styles.dragonItem}>
            <img
                style={{cursor: setDisplayDragon ? 'pointer' : 'unset'}}
                className={styles.dragonImage}
                src={dragon.flickr_images[0]}
                alt={dragon.name}
                onClick={setDisplayDragon ? () => setDisplayDragon(dragon) : () => {}}
            />
            <h3 className={styles.dragonTitle}>{dragon.name}</h3>
            {isProfile && <button onClick={removeFromFavorites} className={styles.removeButton}>Remove from favorites</button>}
        </div>
    );
};

export default DragonItem;