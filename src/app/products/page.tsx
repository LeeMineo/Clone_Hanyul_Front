import React from 'react';
import Link from 'next/link';
import { products } from '../data/products';
import Image from 'next/image';
import styles from './products.module.css';

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <h1 className={styles.title}>전체 {products.length}개</h1>
                <div className={styles.filter}>
                    <select id="category">
                        <option value="all">카테고리</option>
                        <option value="전체">전체</option>
                        {/* 추가 카테고리 옵션 */}
                    </select>
                </div>
                <div className={styles.filter}>
                    <select id="sort">
                        <option value="popularity">인기 순</option>
                        {/* 추가 정렬 옵션 */}
                    </select>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.productList}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productItem}>
                        <Link href={`/product/${product.id}`}>
                            <div className={styles.productLink}>
                                <Image src={product.image} alt={product.name} width={200} height={200} />
                                <div className={styles.productDetails}>
                                    <p className={styles.productDescription}>{product.description}</p>
                                    <h2 className={styles.productName}>{product.name}</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
