import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.section}>
                    <h3>회사 정보</h3>
                    <p>한율</p>
                    <p>서울특별시 강남구</p>
                    <p>전화: 02-1234-5678</p>
                </div>
                <div className={styles.section}>
                    <h3>고객 서비스</h3>
                    <p>이용 약관</p>
                    <p>개인 정보 보호 정책</p>
                    <p>FAQ</p>
                </div>
                <div className={styles.section}>
                    <h3>팔로우하기</h3>
                    <p>페이스북</p>
                    <p>인스타그램</p>
                    <p>트위터</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 Clone Codong. 이민서.</p>
            </div>
        </footer>
    );
};

export default Footer;
