import { useState } from 'react';
// import AddNew from './AddNew';
import './todo.css';
import ToDos from './ToDos';

const ToDo = () => {
    const [todo, setTodo] = useState();
    const [add, setAdd] = useState(false);
  return (
    <>
    {/* <AddNew/> */}
     <ToDos/>
    </>
  )
}
export default ToDo