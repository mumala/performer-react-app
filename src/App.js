import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React, {useEffect, useState} from 'react';
import {AppBar, Button, Container, Grid, List, Paper, Toolbar, Typography} from "@mui/material"
import AddTodo from './AddTodo';
import {call, signout, board} from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    call("/todo", "GET", null)
      .then((response) => {
        setItems(response.data)
        setLoading(false);
      });
  }, []);

  const addItem = (item) => {
    call("/todo","POST",item)
      .then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    call("/todo","DELETE",item)
      .then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    call("/todo","PUT", item)
      .then((response) => setItems(response.data));
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

  let navigationBar = (
    <AppBar position='static'>
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant='h6'>오늘의 할일</Typography>
          </Grid>
          <Grid item>
            <Button color='inherit'>커뮤니티1</Button>
            <Button color='inherit'>커뮤니티2</Button>
          </Grid>
          <Grid item>
            <Button color='inherit' raised onClick={board}>개인설정</Button>
            <Button color='inherit' raised onClick={signout}>로그아웃</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  let todoListPage = (
    <div className='App'>
      {navigationBar}
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );

  let loadingPage = <h1>로딩중...</h1>;
  let content = loadingPage;

  if(!loading){
    content = todoListPage;
  }

  return <div className='App'>{content}</div>
}

export default App;
