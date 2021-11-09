
import { useState } from 'react'

import {v4} from 'uuid';


function App() {
  const [inputText, setInputText] = useState('')
  const [todoList, setTodoList] = useState<
  {
    uuid: string
    todo: string
  }[]
  >([])

  //削除するメソッド
  const onDelete = (uuid: string) => {
    setTodoList((prevState) => {
      return prevState.filter((n) => n.uuid !== uuid)
    })
  }

  const onAdd = () => {
    console.log({ inputText:( inputText.length <= 0) })
    if(inputText.length <= 0) {
      return;
    }
      setTodoList((prevState) => [...prevState, { uuid: v4(), todo: inputText }])

  }

  return (
    <div style={{ width: '30rem', margin: '0 auto' }}>
      <h1>TODO APP</h1>
      <input
        type="text"
        name={'todo'}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={onAdd}>追加</button>
      <div>
        <ul>
          {todoList.map((item, index) => {
            return (
              <li key={`todo_${index}`}>
                {item.todo}
                <button type={'button'} onClick={() => onDelete(item.uuid)}>
                  削除
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App