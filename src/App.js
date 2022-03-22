import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import FormList from './components/FormList/FormList';
import Reciepts from './components/Reciepts/Reciepts';

const App = () => {
  const [pres, setPres] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  function handlePres(newObj){
    let newTodos = [...pres]
    newTodos.push(newObj)
    setPres(newTodos)
  }
  return (
    <div>
      <Counter/>
      <Reciepts/>
      {isLogin ? <FormList setIsLogin={setIsLogin} pres={pres}/> :  <Form setIsLogin={setIsLogin} handlePres={handlePres} />}
      
    </div>
  );
};

export default App;