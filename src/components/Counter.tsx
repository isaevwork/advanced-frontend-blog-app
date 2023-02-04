import React, { useState } from "react";
import classes from './Counter.module.scss'


export function Counter() {
    const [value, setValue] = useState(0);
    function getIncrementValue() {
        setValue(value + 1);
    }
    function getDecrementValue() {
        setValue(value - 1);
    }

    return (
        <div className={classes.btn}>
            <h1>{value}</h1>
            <p>Nep gbplf</p>
            <button onClick={getIncrementValue}>+</button>
            <button onClick={getDecrementValue}>-</button>
        </div>
    );
}

