import React, { useState } from "react";
import { isTemplateExpression } from "typescript";




function App() {
  const [inputText,setInputText] =useState('')
  const [todoList,setTodoList] = useState(
    [
      {
        todo: '文字1',
      },
      {
        todo: '文字2',
      },
      {
        todo: '文字3',
      },
      {
        todo: '文字4',
      },
    ]
  )


  const onDelete =(todo:string)=>{
    setTodoList((prevState) => {
      return prevState.filter((n)=> (n.todo !== todo))
    })
  }

  return<>
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <h1>TODO APP</h1>
    <input type="text" name={'todo'} onChange={(e)=>{
      setInputText(e.target.value)
    }} />
    <button
      onClick={() => {
        setTodoList((prevState) => {
        return [...prevState,{todo:inputText}]
        })
      }}
    >
      追加
      </button>
    <p>{inputText}</p>
    <div>
      <ul>
          {todoList.map((item:{todo:string},index)=>{
            return(
              <li key={`todo_${index}`}>
                {item.todo}
                <button type={'button'} onClick={()=>onDelete(item.todo)}>削除</button>
              </li>
            )
          })}
      </ul>
    </div>
  </div>
  </>
}

export default App;






// function App(){
//   const test =[] as {todo:string}[]
//   list.forEach((item:{todo:string})=>{
//     test.push({
//       todo: item.todo + 'hoge',
//     })
//   })
// }

// const test2 =list.map((item:{todo:string})=>{
//   return{
//     todo:item.todo +'hoge',
//   }
// })
