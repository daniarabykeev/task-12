import React from 'react';

const FormList = (props) => {
    return (
        <div>
            {props.pres.map((item)=> (
                <div key={item.id}>
                    <h1>Welcome {item.email}</h1>
                    <button onClick={() => props.setIsLogin(false)}>Log out</button>
                </div>
            ))}
        </div>
    );
};

export default FormList;