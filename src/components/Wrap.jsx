import React from 'react'
import { Calc } from './calculator/Calc'

const Wrap = () => {
    return(
        <div className='flex'>
            <Calc/>
            <div className="cont-text">
                <h1>Calculator</h1>
                <p>CALCULATE THE NUMBERS</p>
            </div>
        </div>
    )
}

export {Wrap}