import {deleteDoc, doc, setDoc} from "@firebase/firestore";
import {firestore} from "../firebaseconfig";
import {Dragon} from "../types/Dragon";

export const removeDragon = async (dragonId: string, userId: string) => {
    const docRef = doc(firestore, `users/${userId}/favorites/${dragonId}`)
    await deleteDoc(docRef)
}

export const addDragon = async (dragon: Dragon, userId: string) => {
    const docRef = doc(firestore, `users/${userId}/favorites/${dragon.id}`)
    await setDoc(docRef, dragon)
}