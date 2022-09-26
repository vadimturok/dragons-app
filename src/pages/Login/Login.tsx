import React, {FC, useEffect} from 'react';
import styles from './login.module.scss'
import googleIcon from '../../assets/googleLogo.png'
import {useAuthState, useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth, firestore} from '../../firebaseconfig'
import {doc, getDoc, setDoc} from "@firebase/firestore";
import {useNavigate} from "react-router-dom";
import {User} from '@firebase/auth'

const Login: FC = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const [loggedUser, loading] = useAuthState(auth)

    const createUser = async (user: User) => {
        try{
            const docRef = doc(firestore, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            if(!docSnap.exists()){
                await setDoc(docRef, {
                    id: user.uid,
                    photoURL: user.photoURL,
                    email: user.email,
                    displayName: user.displayName
                })
            }
        }catch(e){
            console.log(e)
        }
    }
    const signIn = async () => {
        try{
            await signInWithGoogle([], {prompt: 'select_account'})
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        if(user){
            createUser(user.user)
        }
    }, [user])

    useEffect(() => {
        if(loggedUser){
            navigate('/')
        }
    }, [loggedUser, navigate, loading])


    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <h2 data-testid={'Login title'} className={styles.title}>Welcome to Dragons App!</h2>
                <div data-testid={'login-button'} onClick={signIn} className={styles.googleAuth}>
                    <img alt={'google icon'} width={20} height={20}  src={googleIcon}/>
                    <span>Continue with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;