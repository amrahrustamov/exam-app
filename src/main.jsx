import React from 'react'

const Main = () => {
    const [todoArr,setTodoArr]=React.useState([])
    const [todo,setTodo]=React.useState("")

    const removeItem = (index) =>{
        setTodoArr((oldArr)=>{
            let newArr = [...oldArr];
            newArr.splice(index,1);
            return newArr;
        })
    }

    const handleCheckboxChange = (index) => {
        console.log(index)
        
    }

    function addTodo(e){
        e.preventDefault();
        console.log(todo.value)
        const regex = /[a-zA-Z0-9]/;

        if(regex.test(todo)){
            setTodoArr([...todoArr,todo])
            setTodo(""); 
        }
    }
  return (
    <div className="main">
        <h3>Todo List</h3>
        <form onSubmit={addTodo}>
            <input type="text" placeholder='Add to Todo List something' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
        <ul>
            {todoArr.map((todo,index)=> <li key={index}><input type="checkbox" onChange={() => handleCheckboxChange(index)} /><h5>{index + 1}</h5><p>{todo}</p><button onClick={()=>removeItem(index)}>Delete</button></li>)}
        </ul>
        <div className="footerList">
            <h5>{todoArr.length} elemets</h5>
        </div>
    </div>
  )
}

export default Main
