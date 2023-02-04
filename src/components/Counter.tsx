import React from "react";
import './Counter.scss'

export function Counter() {
    const [value, setValue] = React.useState(0);
    function getIncrementValue() {
        setValue(value + 1);
    }
    function getDecrementValue() {
        setValue(value - 1);
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={getIncrementValue}>+</button>
            <button onClick={getDecrementValue}>-</button>
        </div>
    );
};

