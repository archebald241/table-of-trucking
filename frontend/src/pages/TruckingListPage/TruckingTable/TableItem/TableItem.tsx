import React from 'react'
import { ITruckingItem } from '../../../../types/truckingList';


interface IProps {
    truckingItem: ITruckingItem;
}

const TableItem: React.FC<IProps> = ({truckingItem}) => {
  return (
    <tr>
        <td aria-label='Название'>{truckingItem.name}</td>
        <td aria-label='Дата'>{truckingItem.date}</td>
        <td aria-label='Колличество'>{truckingItem.count}</td>
        <td aria-label='Расстояние'>{truckingItem.date}</td>
    </tr>
  )
}

export default TableItem