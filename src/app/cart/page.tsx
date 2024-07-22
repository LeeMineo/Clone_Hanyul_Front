'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './cart.module.css';

interface CartItem {
    productId: number;
    name: string;
    image: string;
    quantity: number;
    giftWrap: boolean;
}

// 임시 장바구니 데이터
const initialCartItems: CartItem[] = [
    {
        productId: 1,
        name: '보들은행잎 모공핏 세럼',
        image: '/images/products/pd1.jpg',
        quantity: 2,
        giftWrap: true,
    },
    {
        productId: 2,
        name: '보들은행잎 모공핏 마스크',
        image: '/images/products/pd2.jpg',
        quantity: 1,
        giftWrap: false,
    },
];

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
    const [editingItemId, setEditingItemId] = useState<number | null>(null);

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        setCartItems(cartItems.map(item => item.productId === productId ? { ...item, quantity: newQuantity } : item));
    };

    const handleGiftWrapChange = (productId: number, newGiftWrap: boolean) => {
        setCartItems(cartItems.map(item => item.productId === productId ? { ...item, giftWrap: newGiftWrap } : item));
    };

    const handleSave = () => {
        setEditingItemId(null);
    };

    const handleDelete = (productId: number) => {
        setCartItems(cartItems.filter(item => item.productId !== productId));
    };

    const handleEdit = (productId: number) => {
        setEditingItemId(editingItemId === productId ? null : productId);
    };

    const handlePurchaseAll = () => {
        console.log("구매 완료:", cartItems);
        // 모든 아이템 삭제 (구매 후)
        setCartItems([]);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>장바구니</h1>
            <div className={styles.cartItems}>
                {cartItems.map((item) => (
                    <div key={item.productId} className={styles.cartItem}>
                        <Link href={`/product/${item.productId}`}>
                            <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                        </Link>
                        <div className={styles.cartItemDetails}>
                            <Link href={`/product/${item.productId}`}>
                                <h2 className={styles.cartItemName}>{item.name}</h2>
                            </Link>
                            {editingItemId === item.productId ? (
                                <div className={styles.cartItemOptions}>
                                    <label>
                                        수량:
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value))}
                                            className={styles.quantityInput}
                                        />
                                    </label>
                                    <label>
                                        선물 포장:
                                        <input
                                            type="checkbox"
                                            checked={item.giftWrap}
                                            onChange={(e) => handleGiftWrapChange(item.productId, e.target.checked)}
                                            className={styles.checkbox}
                                        />
                                    </label>
                                </div>
                            ) : (
                                <div className={styles.cartItemOptions}>
                                    <p>수량: {item.quantity}</p>
                                    <p>선물 포장: {item.giftWrap ? '예' : '아니오'}</p>
                                </div>
                            )}
                            <div className={styles.cartItemActions}>
                                <button className={styles.editButton} onClick={() => handleEdit(item.productId)}>
                                    {editingItemId === item.productId ? '저장하기' : '수정하기'}
                                </button>
                                <button className={styles.deleteButton} onClick={() => handleDelete(item.productId)}>
                                    삭제하기
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.purchaseAllContainer}>
                <button className={styles.purchaseAllButton} onClick={handlePurchaseAll}>
                    전체 구매하기
                </button>
            </div>
        </div>
    );
};

export default CartPage;
