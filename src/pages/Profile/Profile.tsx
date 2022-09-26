import React from 'react';
import styles from './profile.module.scss'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, firestore} from "../../firebaseconfig";
import Loader from "../../components/Loader/Loader";
import {collection, deleteDoc, doc} from "@firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import DragonItem from "../../components/DragonItem/DragonItem";
import {Dragon} from "../../types/Dragon";

const Profile = () => {
    const [user, isLoading] = useAuthState(auth)
    const query = collection(firestore, `users/${user?.uid}/favorites`)
    const [docs, loading] = useCollectionData(query)


    const removeFromFavorites = async (dragonId: string) => {
        const docRef = doc(firestore, `users/${user?.uid}/favorites/${dragonId}`)
        await deleteDoc(docRef)
    }

    if(isLoading || loading){
        return <Loader/>
    }

    return (
        <div data-testid={'profile'} className={styles.profile}>
            <div className={styles.userInfo}>
                <img className={styles.profileAvatar} src={user?.photoURL!} alt={user?.displayName!}/>
                <div className={styles.profileName}>{user?.displayName}</div>
                <div className={styles.profileEmail}>{user?.email}</div>
            </div>
            <div className={styles.dragonFavorites}>
                <h2 className={styles.favoriteDragonsTitle}>Favorite Dragons</h2>
                <div className={styles.dragonFavoritesList}>
                    {docs?.length! > 0 ? docs?.map(doc =>
                            <DragonItem
                                removeFromFavorites={() => removeFromFavorites(doc.id)}
                                isProfile={true}
                                key={doc.id}
                                dragon={doc as Dragon}
                            />) :
                    <div className={styles.noFavorites}>You dont have favorite dragons yet</div>}
                </div>
            </div>
        </div>
    );
};

export default Profile;