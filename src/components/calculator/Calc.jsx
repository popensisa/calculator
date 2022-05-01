import React, { useState } from 'react'
import './Calc.scss'

const Calc = () => {
    const [result, setResult] = useState('')
    const clear = () => {
        setResult('')
    }
    const slice = () => {
        setResult(result.slice(0, result.length - 1))
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (e) {
            setResult('Error, press AC')
        }
    }

    return(
        <div className='wrapper'>
            <div className="answer">
                <input value={result || '0'} readOnly/>
            </div>
            <div className="calc">
                <div className="item" onClick={clear} id='gray'>AC</div>
                <div className="item" onClick={clear} id='gray'>AC</div>
                <div className="item" onClick={(e) => setResult(result.concat("%"))} id='gray'>%</div>
                <div className="item" onClick={(e) => setResult(result.concat("/"))} id='yel'>/</div>
                <div onClick={(e) => setResult(result.concat(7))} className="item">7</div>
                <div onClick={(e) => setResult(result.concat(8))} className="item">8</div>
                <div onClick={(e) => setResult(result.concat(9))} className="item">9</div>
                <div className="item" onClick={(e) => setResult(result.concat("*"))} id='yel'>X</div>
                <div onClick={(e) => setResult(result.concat(4))} className="item">4</div>
                <div onClick={(e) => setResult(result.concat(5))} className="item">5</div>
                <div onClick={(e) => setResult(result.concat(6))} className="item">6</div>
                <div className="item" onClick={(e) => setResult(result.concat("-"))} id='yel'>-</div>
                <div onClick={(e) => setResult(result.concat(1))} className="item">1</div>
                <div onClick={(e) => setResult(result.concat(2))} className="item">2</div>
                <div onClick={(e) => setResult(result.concat(3))} className="item">3</div>
                <div className="item" onClick={(e) => setResult(result.concat("+"))} id='yel'>+</div>
                <div onClick={slice} className="item">CL</div>
                <div onClick={(e) => setResult(result.concat(0))} className="item">0</div>
                <div className="item" onClick={(e) => setResult(result.concat("."))}>,</div>
                <div className="item" onClick={calculate} id='yel'>=</div>
            </div>
        </div>
    )
}

export {Calc}