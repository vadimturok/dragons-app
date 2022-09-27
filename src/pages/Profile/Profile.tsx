import React from 'react';
import styles from './profile.module.scss'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, firestore} from "../../firebaseconfig";
import Loader from "../../components/Loader/Loader";
import {collection} from "@firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import DragonItem from "../../components/DragonItem/DragonItem";
import {Dragon} from "../../types/Dragon";
import {removeDragon} from "../../utils/DragonActions";

const Profile = () => {
    const [user, isLoading] = useAuthState(auth)
    const query = collection(firestore, `users/${user?.uid}/favorites`)
    const [docs, loading] = useCollectionData(query)

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
                                removeFromFavorites={() => removeDragon(doc.id, user?.uid!)}
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