import React, {FC} from 'react';
import {Dragon} from "../../types/Dragon";
import styles from './dragonslist.module.scss'
import DragonItem from "../DragonItem/DragonItem";

interface DragonsListProps{
    dragons: Dragon[];
    setDisplayDragon: (dragon: Dragon) => void;
}

const DragonsList: FC<DragonsListProps> = ({dragons, setDisplayDragon}) => {
    return (
        <div className={styles.dragonList}>
            {dragons.map(dragon => <DragonItem
                key={dragon.id}
                dragon={dragon}
                setDisplayDragon={setDisplayDragon}
            />)}
        </div>
    );
};

export default DragonsList;