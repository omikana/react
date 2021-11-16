import {ChangeEvent, useState } from 'react'
import {v4} from 'uuid';
import { useTodo } from './useTodo';


function App() {
  const {
    inputText,
    onChengeInputText,
    onAdd,
    todoList,
    onDelete
} = useTodo()


  return (
    <div style={{ width: '30rem', margin: '0 auto' }}>
      <h1>TODO APP</h1>
      <input
        value={inputText}
        type="text"
        name={'todo'}
        onChange={onChengeInputText}
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