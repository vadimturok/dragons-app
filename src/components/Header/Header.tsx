import React from 'react';
import styles from './header.module.scss'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebaseconfig";
import {signOut} from 'firebase/auth'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const logOut = async () => {
        await signOut(auth)
    }
    return (
        <div className={styles.header}>
            <h1 onClick={() => navigate('/')} className={styles.title}>Dragons App</h1>
            {user ?
                <div className={styles.profileLink}>
                    <div onClick={() => navigate('/profile')} className={styles.username}>{user.displayName}</div>
                <img className={styles.profilePicture} src={user.photoURL!} alt="dragon"/>
                    <button className={styles.profileButton} onClick={logOut}>Log Out</button>
            </div> :
                <div className={styles.profileLink}>
                    <button className={styles.profileButton} onClick={() => navigate('/login')}>Log In</button>
                </div>
            }
        </div>
    );
};

export default Header;