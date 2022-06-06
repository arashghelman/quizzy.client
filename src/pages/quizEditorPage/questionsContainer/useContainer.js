import { useState, useEffect } from "react";

export function useContainer(initialValue) {
  const [items, setItems] = useState([]);

  const [prevItems, setPrevItems] = useState([]);

  useEffect(() => {
    const updatedItems = initialValue.map((itm) => ({
      ...itm,
      isCollapsed: true,
    }));

    setItems(updatedItems);
  }, [initialValue]);

  const setIsItemCollapsed = (id, isCollapsed) =>
    setItems((items) => {
      const updatedItems = items.map((itm) => ({ ...itm }));
      const item = updatedItems.find((itm) => itm.id === id);

      if (item === undefined) throw new Error("");

      item.isCollapsed = isCollapsed;

      return updatedItems;
    });

  const setAreItemsCollapsed = (isCollapsed) =>
    setItems((items) => {
      const updatedItems = items.map((itm) => ({
        ...itm,
        isCollapsed: isCollapsed,
      }));

      return updatedItems;
    });

  const moveItem = (dragIndex, hoverIndex) => {
    setPrevItems(items);

    setItems((items) => {
      const updatedItems = items.map((itm) => ({ ...itm }));

      [updatedItems[dragIndex], updatedItems[hoverIndex]] = [
        updatedItems[hoverIndex],
        updatedItems[dragIndex],
      ];

      return updatedItems;
    });
  };

  const revertReorder = () => setItems(prevItems);

  return [
    items,
    setIsItemCollapsed,
    setAreItemsCollapsed,
    moveItem,
    revertReorder,
  ];
}
