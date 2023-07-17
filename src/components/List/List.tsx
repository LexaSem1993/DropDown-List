import React, { FC } from "react";
import { ListItem } from '../ListItem';
import { ListIt } from "../../types";


interface ListProps{
  data: ListIt[];
}


export const List:FC<ListProps> = ({data})=>{
    return (
      <ul>
        {data.map((item,index)=><ListItem item={item} key={index} />)}
      </ul>
    )
}