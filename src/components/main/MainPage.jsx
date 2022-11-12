import React from 'react'
import './mainPage.css'
import Carts from '../../components/Carts/Cart'
import Table from '../Table/Table'
const MainPage = () => {
    return (
        <div className='main__page'>
            <h1>Dashboard</h1>
            <Carts />
            <Table />
        </div>
    )
}

export default MainPage
