import React from 'react'
import { UpdatesData } from '../../data/Data'
import './updates.css'
const Updates = () => {
    return (
        <div className='updates'>
            {UpdatesData.map((update) => (
                <div className="update">
                    <img src={update.img} alt="" />
                    <div className="notification">
                        <div style={{ marginBottom: '0.5rem' }}>
                            <span>{update.name}</span>
                            <span> {update.notification}</span>
                        </div>
                        <span>{update.time}</span>
                    </div>


                </div>
            ))}
        </div>
    )
}

export default Updates
