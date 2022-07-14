import { useState } from "react";

export function useDropdownMenu(initialValue) {
  const [menuItems, setMenuItems] = useState(() =>
    initialValue.map((itm) => ({
      ...itm,
      isSelected: itm.isDefault ? true : false,
    }))
  );

  function selectItem(id) {
    setMenuItems((items) => {
      const updatedItems = items.map((itm) => ({ ...itm, isSelected: false }));

      const selectedItem = updatedItems.find((itm) => itm.id === id);
      selectedItem.isSelected = true;

      return updatedItems;
    });
  }

  return { menuItems, selectItem };
}
