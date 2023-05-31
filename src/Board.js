import React from 'react';
import {AppBar, Button, Container, Grid, List, Paper, Toolbar, Typography} from "@mui/material"
import {call, signout, board} from "./service/ApiService";

const Board = () => {
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

  return (
    <div className='Board'>
        {navigationBar}
        <Container>
        <Typography variant="h4">게시판</Typography>
        {/* 게시물 목록 컴포넌트 */}
        {/* 게시물 작성 폼 */}
        </Container>
    </div>
    
  );
}

export default Board;
