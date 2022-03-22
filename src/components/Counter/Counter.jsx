import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function plus(){
        setCount(count + 1)
    }
    function minus(){
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <p>Вы нажали {count} раз</p>
        </div>
    );
};

export default Counter;