import {ChangeEvent, useState } from 'react'
import {v4} from 'uuid';

export const useTodo =()=>{
 const [inputText, setInputText] = useState('')
 const [todoList, setTodoList] = useState<
 {
   uuid: string
   todo: string
 }[]
 >([])

 const onChengeInputText = (e: ChangeEvent<HTMLInputElement>) =>{
   setInputText(e.target.value)
 }

 //削除するメソッド
 const onDelete = (uuid: string) => {
   setTodoList((prevState) => {
     return prevState.filter((n) => n.uuid !== uuid)
   })
 }

 const onAdd = () => {
   if(inputText.length <= 0) {
     return;
   }
     setTodoList((prevState) => [...prevState, { uuid: v4(), todo: inputText }])
     setInputText('')
 }
 return {
     inputText,
     onChengeInputText,
     onAdd,
     todoList,
     onDelete
 }
}

export type useTodoHooksResult = ReturnType<typeof useTodo>