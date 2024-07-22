import React from 'react';
import Banner from './Banner';
import Main_Products from './Main_Products';
import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Banner />
            <Main_Products />
        </div>
    );
};

export default MainContent;
