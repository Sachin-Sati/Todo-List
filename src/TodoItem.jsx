import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

function TodoItem({todo , removeTodo, toggleTodo}) {
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
      <ListItem
        secondaryAction={
          <Tooltip title="Delete">
            <IconButton edge="end" aria-label="comments" onClick={() => removeTodo(todo.id)}>
                <DeleteIcon />
            </IconButton>
          </Tooltip>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              onChange={() => toggleTodo(todo.id)}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={todo.task} />
        </ListItemButton>
      </ListItem>
    );
}

export default TodoItem;