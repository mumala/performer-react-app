import React, {useState} from 'react';

const AddBoard = (props) => {
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

    return (
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
    );
};

export default AddBoard;