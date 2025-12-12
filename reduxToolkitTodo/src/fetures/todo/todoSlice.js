import {createSlice, nanoid} from '@reduxjs/toolkit'
// createSlice is used for making slice of state 
// ex:- in the birthday party you make slices of cake 
// ex:- in website product, login, cart every part create different slice of data 
//nanoid is used for generate uniqueId

const initialState ={
    todos: [{id:1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo', //A string name for this slice of state
    initialState, //every slice have there initialState
    reducers: {
        addTodo: (state, action) => {
            const todo={
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) =>  todo.id !== action.payload)
        },
        
        
        //addTodo: this is a properties
        // () => {} this is function you can create arraow or anoter way of function
        //in fuction we always meet state and action
        //state is used for give the handson sitiuation of initialstate like how many data in initialstate
        //action is used for meet value like i want remove something for this i want id action provide me a id 
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
//if i can use only export then when i can import any where we use there original name 


export default todoSlice.reducer
//if i can use export default then when i can import any where we use any name like import todoReducer from "../fetures/todo/todoSlice"
