import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React, {useState} from 'react';
import {Container, List, Paper} from "@mui/material"
import AddTodo from './AddTodo';

function App() {
  const [items, setItems] = useState([]);

  const requestOptions = {
    method: "GET",
    header: {"Content_Type":"application/json"}
  };

  fetch("http://localhost:8080/todo", requestOptions)
    .then((response) => response.json())
    .then(
      (response) => {
        setItems(response.data);
      },
      (error) => {

      }
    );

  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;
    setItems([...items, item]);
    console.log("itmes : ", items);
  };

  const deleteItem = (item) => {
    const newItems = items.filter(e=> e.id !== item.id);
    setItems([...newItems]);
  };

  const editItem = () => {
    setItems([...items]);
  };

  let todoItems = 
    items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {items.map((item) => (
            <Todo item={item} key={item.key} editItem={editItem} deleteItem={deleteItem} />
          ))}
        </List>
      </Paper>
    );
  
  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
