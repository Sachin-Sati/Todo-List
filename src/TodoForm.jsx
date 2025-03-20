import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function TodoForm({addTodo}) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction='row'>
                <TextField id="outlined-basic" label="Task" variant="outlined" value={text} onChange={handleChange} />
                <Button type='Submit' variant="contained">Add</Button>
            </Stack>
        </form>
    )
}

export default TodoForm;