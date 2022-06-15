import React from 'react';
import styles from "./NotFoundBlock.module.scss"

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
        <h1>
            <span>🙃</span>
        <br />
        Oops! Nothing found
        </h1>
    </div>
  )
}

