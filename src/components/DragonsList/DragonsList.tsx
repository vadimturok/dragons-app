import React, {FC} from 'react';
import {Dragon} from "../../types/Dragon";
import styles from './dragonslist.module.scss'
import DragonItem from "../DragonItem/DragonItem";
import {useAppDispatch} from "../../hooks";
import {fetchDragons} from "../../store/reducers/dragons/actionCreators";

interface DragonsListProps{
    dragons: Dragon[];
    setDisplayDragon: (dragon: Dragon) => void;
}

const DragonsList: FC<DragonsListProps> = ({dragons, setDisplayDragon}) => {
    const dispatch = useAppDispatch()
    const fetchData = () => {
        dispatch(fetchDragons())
    }
    return (
        <>
            <button onClick={fetchData} className={styles.fetchButton}>Fetch again</button>
            <div className={styles.dragonList}>
                {dragons.map(dragon => <DragonItem
                    key={dragon.id}
                    dragon={dragon}
                    setDisplayDragon={setDisplayDragon}
                />)}
            </div>
        </>
    );
};

export default DragonsList;