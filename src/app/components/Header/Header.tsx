'use client'; // This directive marks the component as a Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

// Define the type for navigation items
type NavItem = '베스트' | '제품' | '라인' | '브랜드';

const Header: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);

    const handleMouseEnter = (item: NavItem) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const renderSubMenu = (item: NavItem) => {
        switch (item) {
            case '베스트':
                return (
                    <div className={styles.hoverMenu}>
                        <span>유형별</span>
                        <span>고민별</span>
                    </div>
                );
            case '브랜드':
                return (
                    <div className={styles.hoverMenu}>
                        <span>한율 소개</span>
                        <span>새소식</span>
                        <span>광고 영상</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoSection}>
                <Link href="/">
                    <Image src="/images/logo.png" alt="한율 로고" width={200} height={50} />
                </Link>
            </div>
            <div className={styles.rightImage}>
                <Link href="/cart">
                    <Image src="/images/rg.png" alt="Additional Logo" width={50} height={50} />
                </Link>
            </div>
            <hr className={styles.divider} />
            <nav className={styles.navigation}>
                {(['베스트', '제품', '라인', '브랜드'] as NavItem[]).map((item) => (
                    <div
                        key={item}
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={handleMouseLeave}
                        className={styles.navItem}
                    >
                        <Link href={item === '제품' ? '/products' : `/${item}`} passHref>
                            <span>{item}</span>
                        </Link>
                        {hoveredItem === item && renderSubMenu(item)}
                    </div>
                ))}
            </nav>
            <hr className={styles.divider2} />
        </header>
    );
};

export default Header;
