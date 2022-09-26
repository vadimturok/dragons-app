import React from 'react';
import styles from './loader.module.scss'
import {CircularProgress} from "@mui/material";

const Loader = () => {
    return <CircularProgress className={styles.loader}/>
};

export default Loader;