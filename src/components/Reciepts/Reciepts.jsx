import React, { useState } from 'react';
import Ingredients from '../Ingredients/Ingredients';

const Reciepts = () => {
    const [meal, setMeal] = useState([])
    return (
        <div>
            <input type="radio" name="food" value="спагетти" onChange={(e) => setMeal(e.target.value)}/>
            <label>Спагетти</label>
            <input type="radio"  name="food" value="плов" onChange={(e) => setMeal(e.target.value)}/>
            <label>Плов</label>
            <input type="radio"  name="food" value="куурдак" onChange={(e) => setMeal(e.target.value)}/>
            <label>Куурдак</label>
            <Ingredients meal={meal}/>
        </div>
    );
};

export default Reciepts;