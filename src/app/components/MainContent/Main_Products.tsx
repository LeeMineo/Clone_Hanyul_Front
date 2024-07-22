import React from 'react';
import Image from 'next/image';
import styles from './Products.module.css';

const products = [
    { src: "/images/product/p1.jpg", title: "한율 신제품", description: "NEW 어린쑥 클렌징 폼" },
    { src: "/images/product/p2.jpg", title: "한율 영상", description: "속부터 탄탄하게 빨간쌀 보습탄력" },
    { src: "/images/product/p3.jpg", title: "한율 소식", description: "NEW 한율 어린쑥 크림 론칭" },
];

const Main_Products = () => {
    return (
        <div className={styles.products}>
            {products.map((product, index) => (
                <div key={index} className={styles.product}>
                    <Image src={product.src} alt={product.title} width={500} height={300} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Main_Products;
