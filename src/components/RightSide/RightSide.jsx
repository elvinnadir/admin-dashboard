import React from 'react'
import Customer from '../Customer/Customer'
import Updates from '../updates/Updates'
import './rightSide.css'
const RightSide = () => {
    return (
        <div className='right__side'>
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Customer review</h3>
                <Customer />
            </div>
        </div>
    )
}

export default RightSide
