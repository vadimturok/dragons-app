import React, {FC, useState} from 'react';
import styles from './home.module.scss'
import { useAppSelector} from "../../hooks";
import DragonDetails from "../../components/DragonDetails/DragonDetails";
import DragonsList from "../../components/DragonsList/DragonsList";
import {Dragon} from "../../types/Dragon";
import Loader from "../../components/Loader/Loader";

const Home: FC = () => {
    const {dragon, isLoading} = useAppSelector(state => state.dragon)
    const {dragons, isLoading: loadingDragons} = useAppSelector(state => state.dragonList)
    const [displayDragon, setDisplayDragon] = useState<Dragon>({} as Dragon)

    return (
        <div className={styles.home}>
            {(isLoading || loadingDragons) ? <Loader/> :
                <div>
                    <DragonDetails dragon={Object.keys(displayDragon).length > 0 ? displayDragon : dragon}/>
                    <DragonsList setDisplayDragon={setDisplayDragon} dragons={dragons}/>
                </div>
            }
        </div>
    );
};

export default Home;