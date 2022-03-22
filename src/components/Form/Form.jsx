import React, { useState } from 'react';

const Form = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    function addTask(){
        let newObj = {
            email,
            password,
            password2,
            id: Date.now()
        }
        if(!email || !password || !password2){
            return alert('Заполните поля')
        }
        if(password === password2){
            props.handlePres(newObj);
            props.setIsLogin(true);
        }else{
            return alert("Пароли не совпадают")
        }
    }



    return (
        <div style={{display: "flex", flexDirection: "column", width: "220px"}}>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='email'/>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder='password'/>
            <input onChange={(e) => setPassword2(e.target.value)} value={password2} type="text" placeholder='confirm password'/>
            <button onClick={()=> addTask()}>Sign Up</button>
        </div>
    );
};

export default Form;