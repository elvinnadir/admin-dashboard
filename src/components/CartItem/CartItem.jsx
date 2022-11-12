import React, { useState } from 'react'
import './cartItem.css'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import { UilTimes } from "@iconscout/react-unicons";
import Chart from 'react-apexcharts'
import 'react-circular-progressbar/dist/styles.css';

const CartItem = (props) => {
    const [expended, setExpended] = useState(false)
    return (
        <AnimateSharedLayout>
            {
                expended ?
                    <ExpendedCart param={props} setExpended={() => setExpended(false)} />
                    : <CompactCart param={props} setExpended={() => setExpended(true)} />
            }
        </AnimateSharedLayout>
    )
}
//CompactCart
function CompactCart({ param, setExpended }) {
    const Png = param.png
    return (
        <motion.div className="compact__cart"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow

            }}
            onClick={setExpended}
            layoutId='expendableCart'
        >
            <div className="compact__cart-bar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="compact__cart-detail">
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}

//Expended Cart in here
function ExpendedCart({ param, setExpended }) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
        },
    };

    return (
        <motion.div className="expended__cart"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            layoutId='expendableCart'
        >

            <div style={{ alignSelf: 'flex-end', sursor: 'pointer', color: 'white' }}
            >
                <UilTimes onClick={setExpended} />
            </div>
            <span>{param.title}</span>
            <div className="expended__cart-chart">
                <Chart series={param.series} type='area' options={data.options} />
            </div>
            <span>Last 24 hours</span>

        </motion.div>
    )
}

export default CartItem
