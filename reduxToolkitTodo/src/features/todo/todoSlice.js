import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1,text:"Hello World"}]
}

export const todoSlice =createSlice({
    name :'todo',
    initialState,
    reducers :{
        //  here in redux toolkit we not only declare the method but we also define the method
        addTodo :(state, action)=>{
        const todo ={
        id:nanoid(),
        text:action.payload
        }
        state.todos.push(todo)
        },
        removeTodo :(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        }
    }
})


export const {addTodo,removeTodo}=todoSlice.actions
const todoReducer =todoSlice.reducer
export default todoReducer