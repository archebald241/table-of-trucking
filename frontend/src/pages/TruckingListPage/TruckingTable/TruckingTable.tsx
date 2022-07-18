import React from 'react'
import { IconArrows } from '../../../assets/Icons'
import { IOrder, ITruckingList } from '../../../types/truckingList';
import ListItem from './TableItem';
import "./TruckingTable.scss"


interface IProps {
    order: IOrder;
    serOrder: Function;
    truckingList: ITruckingList;
}

const TruckingTable: React.FC<IProps> = ({ order, serOrder, truckingList }) => {

    const orderTrucking = (orderBy: string) => {
        const newOrder = {
            orderBy: orderBy,
            orderDesc: "ASC"
        }

        if (orderBy === order.orderBy) {
            newOrder.orderDesc = newOrder.orderDesc === order.orderDesc ? "DESC" : "ASC" 
            serOrder(newOrder);
        } else {
            serOrder(newOrder);
        }
    }

    return (
        <>
            {truckingList.count
                ? <table className={"truckingTable"}>
                    <thead>
                        <tr>
                            <th onClick={() => orderTrucking("name")}>Название <IconArrows color='gray' size={13} /></th>
                            <th onClick={() => orderTrucking("date")}>Дата <IconArrows color='gray' size={13} /></th>
                            <th onClick={() => orderTrucking("count")}>Колличество <IconArrows color='gray' size={13} /></th>
                            <th onClick={() => orderTrucking("distance")}>Расстояние, км <IconArrows color='gray' size={13} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {truckingList.truckingList.map((item) => <ListItem truckingItem={item} />)}
                    </tbody>
                </table>
                : <h1 style={{fontSize: 40, textAlign: "center"}}>Контент не найден</h1>
            }
        </>
    )
}

export default TruckingTable