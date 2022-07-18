import React from 'react'
import { createTrucking } from '../../api/truckingList'
import { ITruckingCreate } from '../../types/truckingList'
import "./Navbar.scss"

const Navbar = () => {
    const create = () => {
        const data: ITruckingCreate = {
            name: "name",
            count: 10,
            date: new Date("12.02.2022"),
            distance: 12
        }

        createTrucking(data)
    }

    return (
        <div className={"navbar"}>
            <span>Trucking service</span> - заказывайте доставку у нас!
            <button onClick={create}>CLICK ME</button>
        </div>
    )
}

export default Navbar