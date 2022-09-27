import React, {FC, useCallback, useEffect, useState} from 'react';
import styles from './dragondetails.module.scss'
import {Dragon} from "../../types/Dragon";
import PictureSlider from "../PictureSlider/PictureSlider";
import { doc, getDoc, setDoc, deleteDoc} from "@firebase/firestore";
import {auth, firestore} from "../../firebaseconfig";
import {useAuthState} from "react-firebase-hooks/auth";

const DragonDetails: FC<{dragon: Dragon}> = ({dragon}) => {
    const [user] = useAuthState(auth)
    const [dragonDoc, setDragonDoc] = useState<Dragon>({} as Dragon)

    const getDragonDoc = useCallback(async () => {
        const dragonDoc = await getDoc(doc(firestore, `users/${user?.uid}/favorites/${dragon.id}`))
        if(dragonDoc){
            setDragonDoc(dragonDoc.data() as Dragon)
        }
    }, [dragon.id, user?.uid])

    const addToFavorites = async () => {
        const docRef = doc(firestore, `users/${user?.uid}/favorites/${dragon.id}`)
        await setDoc(docRef, dragon)
        setDragonDoc(dragon)
    }

    const removeFromFavorites = async () => {
        const docRef = doc(firestore, `users/${user?.uid}/favorites/${dragon.id}`)
        await deleteDoc(docRef)
        setDragonDoc({} as Dragon)
    }

    useEffect(() => {
        getDragonDoc()
    }, [getDragonDoc])

    return (
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                <PictureSlider images={dragon.flickr_images}/>
            </div>
            <div className={styles.dragonInfo}>
                <div className={styles.dragonInfoTop}>
                    <h1 className={styles.dragonTitle}>{dragon.name}</h1>
                    {user && <button
                        onClick={dragonDoc?.id === dragon.id ? removeFromFavorites : addToFavorites}
                        className={styles.favoritesButton}
                    >
                        {dragonDoc?.id === dragon.id ? 'Remove from favorites' : 'Add to favorites'}
                    </button>}
                </div>
                <p className={styles.dragonDescription}>{dragon?.description}</p>
                <p className={styles.measures}>Mass: {dragon?.dry_mass_kg} kg</p>
                <p className={styles.measures}>Height: {dragon?.diameter?.meters} m</p>
                <p className={styles.measures}>Launch: {dragon?.first_flight}</p>
                <a rel={'noreferrer'} data-testid={'wiki-link'} target={'_blank'} href={dragon.wikipedia} className={styles.wikiLink}>Check more on Wikipedia</a>
            </div>
        </div>
    );
};

export default React.memo(DragonDetails);