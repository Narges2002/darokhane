import React, { useState } from 'react';
import '../assets/css/basket.css';

function Basket({ basketOfUser, addOneToBasket, removeOneFromBasket }) {
    const itemCount = basketOfUser.reduce((acc, item) => {
        acc[item.id] = (acc[item.id] || 0) + item.count;
        return acc;
    }, {});

    const filteredItems = basketOfUser.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.id === item.id
        ))
    ).map(item => {
        return { ...item, count: itemCount[item.id] };
    });

    const totalAmount = basketOfUser.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <>
            <div className="basket-container">
                {filteredItems.map(item => (
                    <BasketUser key={item.id} item={item} addOneToBasket={addOneToBasket} removeOneFromBasket={removeOneFromBasket} />
                ))}
            </div>
            <div className='total'>
                <b><p>مجموع پرداختی شما : {totalAmount.toLocaleString()}  تومان</p></b>
            </div>
        </>
    );
}

function BasketUser({ item, addOneToBasket, removeOneFromBasket }) {
    return (
        <div className='basket-user'>
            <div className='btn-add-remove'>
                <button onClick={() => removeOneFromBasket(item.id)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => addOneToBasket(item)}>+</button>
            </div>
            <div className='user-pro'>
                <p>{item.name}</p>
                <span className='basker-price'><b>{(item.count * item.price).toLocaleString()} تومان</b></span>
            </div>
            <div className='user-img'>
                <img src={item.src} alt={item.name} />
            </div>
        </div>
    );
}

export default Basket;