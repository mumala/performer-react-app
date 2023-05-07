import React, {useState} from "react";
import {
    ListItem, 
    ListItemText, 
    InputBase, 
    Checkbox,
    ListItemSecondaryAction,
    IconButton,
    List,
    Icon
} from "@mui/material"
import { DeleteOutline } from "@mui/icons-material";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    const deleteEventHandler = () => {
        deleteItem(item);
    };

    const editEventHandler = (e) => {
        item.title = e.target.value;
        editItem(item);
    };

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem();
    };

    const turnOffReadOnly = () => {
        setReadOnly(false);
    };

    const turnOnReadOnly = (e) => {
        if (e.key === "Enter"){
            setReadOnly(true);
        }
    };

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label":"naked", readOnly:readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;