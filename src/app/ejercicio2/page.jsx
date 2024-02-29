'use client'

import React, { useEffect, useState } from 'react';

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())

        }, 1000)
        console.log(time)

        return () => clearInterval(timer)

    }, [])



    return (
        <div className='flex justify-center bg-white items-center h-screen'>
            <div className='flex justify-center text-7xl flex-col items-center border-8 border-green-400 p-5 rounded-xl bg-black'>
                <h2 className='text-green-400 font-bold'>{time.toLocaleTimeString()}</h2>
            </div>
        </div>
    )
}

export default DigitalClock