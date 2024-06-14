import React, { useState, useEffect } from 'react';

const BasketManager = ({ children }) => {
  const [basketOfUser, setBasketOfUser] = useState(() => {
    const savedBasket = localStorage.getItem('basketOfUser');
    if (savedBasket) {
      return JSON.parse(savedBasket).map(item => ({
        ...item,
        count: parseInt(localStorage.getItem(`count_${item.id}`)) || 1
      }));
    } else {
      return [];
    }
  });

  const [newItem, setNewItem] = useState(null);

  const addOneToBasket = (newItem) => {
    const existingItemIndex = basketOfUser.findIndex(item => item.id === newItem.id);
    if (existingItemIndex !== -1) {
      const updatedBasket = basketOfUser.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      setBasketOfUser(updatedBasket);
      localStorage.setItem('basketOfUser', JSON.stringify(updatedBasket));
      localStorage.setItem(`count_${newItem.id}`, updatedBasket[existingItemIndex].count.toString());
    } else {
      const updatedBasket = [...basketOfUser, { ...newItem, count: 1 }];
      setBasketOfUser(updatedBasket);
      localStorage.setItem('basketOfUser', JSON.stringify(updatedBasket));
      localStorage.setItem(`count_${newItem.id}`, '1');
    }
  };

  const removeOneFromBasket = (itemId) => {
    const existingItemIndex = basketOfUser.findIndex(item => item.id === itemId);
    if (existingItemIndex !== -1) {
      const updatedBasket = basketOfUser.map((item, index) => {
        if (index === existingItemIndex && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      }).filter(item => item.count > 0);
      setBasketOfUser(updatedBasket);
      localStorage.setItem('basketOfUser', JSON.stringify(updatedBasket));
      localStorage.setItem(`count_${itemId}`, updatedBasket[existingItemIndex]?.count.toString() || '0');
    }
  };

  useEffect(() => {
    if (newItem) {
      addOneToBasket(newItem);
      setNewItem(null);
    }
  }, [newItem]);

  useEffect(() => {
    console.log('Updated basket:', basketOfUser);
  }, [basketOfUser]);

  return children({ basketOfUser, addOneToBasket, removeOneFromBasket, setNewItem });
};

export default BasketManager;
