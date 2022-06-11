import { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export function useDragDrop(initialItem, dropCallback) {
  const itemType = "QUESTION";

  const ref = useRef(null);

  const [canDragState, setCanDragState] = useState(false);
  const toggleCanDrag = () => setCanDragState((prev) => !prev);

  const [{ isDragging, canDrag }, drag] = useDrag(
    () => ({
      type: itemType,
      item: initialItem,
      canDrag: canDragState,
      collect: (monitor) => ({
        isDragging: initialItem.id === monitor.getItem()?.id,
        canDrag: canDragState,
      }),
    }),
    [canDragState]
  );

  const [, drop] = useDrop(() => ({
    accept: itemType,
    hover: (item, monitor) => {
      const element = ref.current;

      if (!element) return;

      const dragIndex = item.index;
      const hoverIndex = initialItem.index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = element?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      dropCallback(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  }));

  drag(drop(ref));

  return { ref, isDragging, canDrag, toggleCanDrag };
}
