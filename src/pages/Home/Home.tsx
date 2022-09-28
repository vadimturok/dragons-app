import React, {FC, useState} from 'react';
import styles from './home.module.scss'
import {useAppSelector} from "../../hooks";
import DragonDetails from "../../components/DragonDetails/DragonDetails";
import DragonsList from "../../components/DragonsList/DragonsList";
import {Dragon} from "../../types/Dragon";
import Loader from "../../components/Loader/Loader";
import {getDragonFromLS, isEmpty} from "../../utils/DragonActions";

const Home: FC = () => {
    const {dragon, isLoading} = useAppSelector(state => state.dragon)
    const {dragons, isLoading: loadingDragons} = useAppSelector(state => state.dragonList)
    const [displayDragon, setDisplayDragon] = useState<Dragon>({} as Dragon)
    const dragonFromLS = getDragonFromLS()

    return (
        <div className={styles.home}>
            {(isLoading && !dragonFromLS)  ? <Loader/> :
                <DragonDetails dragon={!isEmpty(displayDragon) ? displayDragon : isEmpty(dragon) ? dragonFromLS as Dragon : dragon}/>
            }
            {!loadingDragons && <DragonsList dragons={dragons} setDisplayDragon={setDisplayDragon}/>}
        </div>
    );
};

export default Home;