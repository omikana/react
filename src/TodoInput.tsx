import {useTodoHooksResult} from './useTodo'

type TodoInputProps = Pick<
useTodoHooksResult,
'inputText' | 'onChengeInputText' | 'onAdd'
>

export const TodoInput = ({
    inputText,
    onChengeInputText,
    onAdd
}:TodoInputProps)=> {
    return <>
    <input
        value={inputText}
        type="text"
        name={'todo'}
        onChange={onChengeInputText}
    />
    <button onClick={onAdd}>追加</button>
    </>
}