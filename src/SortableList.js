import React from 'react';
import SortableItem from './SortableItem';
import { useDrop } from 'react-dnd';

const SortableList = ({ items, moveItem }) => {
  const [, drop] = useDrop(() => ({
    accept: 'sortable-item',
  }));

  return (
    <div ref={drop}>
      {items.map((item, index) => (
        <SortableItem key={item.id} index={index} item={item} moveItem={moveItem} />
      ))}
    </div>
  );
};

export default SortableList;
