"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

const slides = [
    "/images/slide/s_1.jpg",
    "/images/slide/s_2.jpg",
    "/images/slide/s_3.jpg",
    "/images/slide/s_4.jpg",
    "/images/slide/s_5.jpg",
    "/images/slide/s_6.jpg",
    "/images/slide/s_7.jpg",
    "/images/slide/s_8.jpg",
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const startSlideShow = () => {
        stopSlideShow();
        slideInterval.current = setInterval(nextSlide, 3000);
    };

    const stopSlideShow = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
            slideInterval.current = null;
        }
    };

    useEffect(() => {
        startSlideShow();
        return () => stopSlideShow();
    }, []);

    return (
        <div className={styles.banner}>
            <div className={styles.slideContainer} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((src, index) => (
                    <div key={index} className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}>
                        <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
                    </div>
                ))}
            </div>
            <button className={styles.prev} onClick={prevSlide}>{"<"}</button>
            <button className={styles.next} onClick={nextSlide}>{">"}</button>
            <button className={styles.pausePlay} onClick={slideInterval.current ? stopSlideShow : startSlideShow}>
                {slideInterval.current ? "Pause" : "Play"}
            </button>
            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
