import React,{useState} from "react";

const defaultTaskList = [
  {
    title: '文22x字1'
  },
  {
    title: '文字2'
  },
  {
    title: '文字3'
  },
  {
    title: 'aa'
  }
]

function App() {
  //inputから最新の値を取得する
  const [taskTitle,setTaskTitle] = useState("");
  const chengeTaskTitle =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTaskTitle(e.target.value)
  }
  //取得した値を配列の中に入れる
  const [taskList,setTaskList] = useState(defaultTaskList);
  const addTask =()=>{
    setTaskList((prevState)=>{
    const currentState = [...prevState]
    currentState.push({title:taskTitle})
    return currentState;
  })}
  //idx番目の配列を消す
  const removeTask =(idx:number)=>{
    return ()=>{
      setTaskList((prevState)=>{
        const currentState = [...prevState]
        currentState.splice(idx,1)
        return currentState;
      })
    }
  }

  return<>
    <div style={{ width: "30em", margin: '0 auto'}}>
      <h1>TODO APP</h1>
      <input type='text' onChange={
        chengeTaskTitle
        }
      />
      <button onClick={addTask}>追加</button>

      <div>
        <ul>
          {
            taskList.map((task,idx)=>{
              return(
                <li>
                  <span>{task.title}</span>
                  <button type={"button"} onClick={removeTask(idx)}
                  >削除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  </>
}

export default App;
