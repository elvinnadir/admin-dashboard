import React, { useState } from 'react'
import './sidebar.css'
import logo from '../../assets/logo.png'
import { SidebarData } from '../../data/Data'
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons'
import { motion } from 'framer-motion'
const Sidebar = () => {
    const [selected, setSelected] = useState(0)
    const [expended, setExpended] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }

    return (
        <>
            <div className='bars' style={expended ? { left: '60%' } : { left: '5%' }}
                onClick={() => setExpended(!expended)}

            >
                <UilBars />
            </div>
            <motion.div className='sidebar'
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expended}` : ''}
            >
                {/* logo */}
                <div className="sidebar__logo">
                    <img src={logo} alt="logo" />
                    <span>
                        Sh<span>o</span>ps
                    </span>
                </div>
                {/* menu */}
                <div className="sidebar__menu">
                    {SidebarData.map((item, index) => (
                        <div className={
                            selected === index ? 'sidebar__menu-item active'
                                : 'sidebar__menu-item'}
                            key={index}
                            onClick={() => setSelected(index)}

                        >
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    ))}
                    <div className="sidebar__menu-item">
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Sidebar
