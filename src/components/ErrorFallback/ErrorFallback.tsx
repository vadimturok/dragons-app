import React from 'react';
import styles from './errorfallback.module.scss'

const ErrorFallback = (props: any) => {
    const {error, resetErrorBoundary} = props
    return (
        <div className={styles.fallback}>
            {error}
            Something went wrong
            <button onClick={() => resetErrorBoundary()} className={styles.resetButton}>To Home</button>
        </div>
    );
};

export default ErrorFallback;