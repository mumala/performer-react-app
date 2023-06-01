import React, {useState} from 'react';
import {AppBar, Button, TextField, Grid, Paper, Toolbar, Typography} from "@mui/material"
import { styled } from '@mui/system';
import {signout, board, main} from "./service/ApiService";

const BoardWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
}));

const Input = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const ButtonWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCreatePost = () => {
    const newPost = {
      id: posts.length + 1,
      title: title,
      content: content,
    };
    setPosts([...posts, newPost]);

    setTitle('');
    setContent('');
  };

  const handleReadPost = (postId) => {
    const post = posts.find((post) => post.id === postId);
    console.log('조회된 게시글:', post);
  };

  let navigationBar = (
      <AppBar position='static'>
        <Toolbar>
          <Grid justifyContent="space-between" container>
            <Grid item>
              <Typography variant='h6'>Performer</Typography>
            </Grid>
            <Grid item>
              <Button color='inherit' raised onClick={main}>TODO</Button>
              <Button color='inherit' raised onClick={board}>BOARD</Button>
            </Grid>
            <Grid item>
              <Button color='inherit'>개인설정</Button>
              <Button color='inherit' raised onClick={signout}>로그아웃</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  );

 
  return (
    <AppBar position='static'>
      {navigationBar}
      <BoardWrapper>
      <Title variant="h5">게시판</Title>
      <Form>
        <Input
          label="제목"
          variant="outlined"
          value={title}
          onChange={handleTitleChange}
        />
        <Input
          label="내용"
          multiline
          rows={4}
          variant="outlined"
          value={content}
          onChange={handleContentChange}
        />
        <ButtonWrapper>
          <Button variant="contained" color="primary" onClick={handleCreatePost}>
            작성
          </Button>
        </ButtonWrapper>
      </Form>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <Typography>{post.title}</Typography>
            <Button variant="outlined" onClick={() => handleReadPost(post.id)}>
              조회
            </Button>
          </div>
        ))
      ) : (
        <Typography>게시글이 없습니다.</Typography>
      )}
      </BoardWrapper>
    </AppBar>
  );
};

export default Board;
