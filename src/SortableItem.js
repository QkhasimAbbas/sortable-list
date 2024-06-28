import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const SortableItem = ({ item, index, moveItem }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'sortable-item',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'sortable-item',
    item: { type: 'sortable-item', index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1, padding: '8px', border: '1px solid gray', marginBottom: '4px', cursor: 'move' }}>
      {item.text}
    </div>
  );
};

export default SortableItem;
