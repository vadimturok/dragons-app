import React, {FC} from 'react';
import styles from './layout.module.scss'
import Header from "../Header/Header";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/firebaseconfig";
import Loader from "../Loader/Loader";


const Layout: FC<{children: React.ReactElement}> = ({children}) => {
    const [, loading] = useAuthState(auth)
    return (
        <div className={styles.layout}>
            {loading ? <Loader/> :
                <>
                <Header/>
                {children}
                </>}
        </div>
    );
};

export default Layout;