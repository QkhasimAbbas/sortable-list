import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SortableList from './SortableList';

const initialItems = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
  { id: 4, text: 'Item 4' },
];

const App = () => {
  const [items, setItems] = useState(initialItems);

  const moveItem = useCallback((dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];
    const updatedItems = [...items];
    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, dragItem);
    setItems(updatedItems);
  }, [items]);

  return (
    <DndProvider backend={HTML5Backend}>
      <SortableList items={items} moveItem={moveItem} />
    </DndProvider>
  );
};

export default App;

