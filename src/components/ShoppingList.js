import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [userInput, setUserInput] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleUserSearch(event) {
    setUserInput(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === 'All' && userInput !== null)
      return item.name.includes(userInput);

    return (
      item.category === selectedCategory &&
      item.name.includes(userInput)
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onSearchChange={handleUserSearch}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
