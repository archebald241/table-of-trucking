import React, { useEffect, useState } from 'react'
import "./TruckingFilters.scss"
import { IconSearch } from '../../../assets/Icons'
import Input from '../../../components/UI/Input'
import Select from '../../../components/UI/Select'
import { ITruckingCreate } from '../../../types/truckingList'
import { createTrucking } from '../../../api/truckingList'


const orderBy = [
    {
        value: "name",
        label: "Название"
    },
    {
        value: "date",
        label: "Дата"
    },
    {
        value: "count",
        label: "Колличество"
    },
    {
        value: "distance",
        label: "Расстояние"
    },
]

const orderDesc = [
    {
        value: "in",
        label: "Содержит"
    },
    {
        value: "eq",
        label: "Равно"
    },
    {
        value: "gt",
        label: "Больше"
    },
    {
        value: "lt",
        label: "Меньше"
    }
]

interface IProps {
    setFilter: Function;
}

const TruckingFilters: React.FC<IProps> = ({setFilter}) => {
    const [searchText, setSearchText] = useState("")
    const [valOrderBy, setValOrderBy] = useState(orderBy[0].value)
    const [valOrderDesc, setValOrderDesc] = useState(orderDesc[0].value)

    const create = () => {
        const data: ITruckingCreate = {
            name: "name",
            count: 10,
            date: new Date("12.02.2022"),
            distance: 12
        }

        createTrucking(data)
    }

    useEffect(() => {
        const newFilters = {
            value: searchText,
            searchBy: valOrderBy,
            searchDesc:valOrderDesc
        }
        setFilter(newFilters)
    }, [searchText, valOrderBy, valOrderDesc])

    return (
        <div className={"truckingFilters"}>
            <Input
                type={valOrderBy===orderBy[0].value || valOrderBy===orderBy[1].value ? "text" : "number"}
                value={searchText}
                onChange={setSearchText}
                placeholder={"Искать по..."}
                inputIcon={<IconSearch color={'purple'} />}
            />
            <Select
                options={orderBy}
                value={valOrderBy}
                setValue={setValOrderBy}
            />
            <Select
                options={orderDesc}
                value={valOrderDesc}
                setValue={setValOrderDesc}
            />
            <button onClick={create}>Добавить</button>
        </div>
    )
}

export default TruckingFilters