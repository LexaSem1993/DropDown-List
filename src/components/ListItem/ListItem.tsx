import React, { FC, useState } from "react";
import { ListIt } from "../../types";

interface ListItemProps {
  item: ListIt;
}

export const ListItem: FC<ListItemProps> = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <li>
      <p onClick={handleActive}>{item.title}</p>
      {isActive && <span>{item.body}</span>}
    </li>
  );
};
