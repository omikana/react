import {ChangeEvent, useState } from 'react'
import {v4} from 'uuid';
import { useTodo } from './useTodo';
import { TodoInput } from './TodoInput';

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
      <TodoInput inputText={inputText}
      onChengeInputText={onChengeInputText}
      onAdd={onAdd} />
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