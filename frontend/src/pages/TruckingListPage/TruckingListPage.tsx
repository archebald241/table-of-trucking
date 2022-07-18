import React, { useEffect, useState } from 'react'
import "./TruckingListPage.scss"
import Pagination from '../../components/UI/Pagination'
import TruckingFilters from './TruckingFilters'
import TruckingTable from './TruckingTable'
import { IFilter, IOrder, ITruckingList } from '../../types/truckingList'
import { fetchTruckingList } from '../../api/truckingList'


const defaultState: ITruckingList = {
    truckingList: [],
    page: 1,
    perPage: 5,
    count: 0
}

const TruckingListPage = () => {
    const [truckingList, setTruckingList] = useState<ITruckingList>(defaultState)
    const [page, setPage] = useState(truckingList.page)
    const [perPage, setPerPage] = useState(truckingList.perPage)
    const [filter, setFilter] = useState<IFilter>({
        value: "",
        searchBy: "name",
        searchDesc: "in"
    })
    const [order, setOrder] = useState<IOrder>({
        orderBy: "name",
        orderDesc: "ASC"
    })

    useEffect(() => {
        const data = {
            page,
            perPage,
            filter,
            order
        }

        const truckingListData = fetchTruckingList(data);

        truckingListData.then(responce => {
            setTruckingList(responce)         
        })
    }, [filter, order])

    return (
        <div className={"truckingListPage"}>
            <TruckingFilters setFilter={setFilter} />

            <TruckingTable truckingList={truckingList} order={order} serOrder={setOrder} />

            <Pagination 
                page={page} 
                setPage={setPage} 
                perPage={perPage} 
                setPerPage={setPerPage}
                count={truckingList.count}
            />
        </div>
    )
}

export default TruckingListPage