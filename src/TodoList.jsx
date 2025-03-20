import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';

const initialTodos =  JSON.parse(localStorage.getItem("todos")) || [];

function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const removeTodo  = (id) => (
        setTodos(todos => {
            return todos.filter(todo => todo.id !== id)
        })
    )

    const toggleTodo = (id) => {
        setTodos(todos => {
            return todos.map(todo => {
                return todo.id === id ? {...todo, completed: !todo.completed} : todo;
            })
        })
    }

    const addTodo = (text) => {
        setTodos(todos => {
            return [...todos, {id: crypto.randomUUID(), task: text, completed: false}];
        })
    }

    return (
        <>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: '30px 30px'}}>
        <Typography variant="h3" component="h2" sx={{flexGrow: 1, m: 3}}>Todo List</Typography>
            <TodoForm addTodo={addTodo} />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
                ))}       
            </List>
        </Box>
        </>
    )
}

export default TodoList;