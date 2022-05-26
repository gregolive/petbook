import { useRef, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StyledForm } from './styled';

const PostForm = () => {
  const form = useRef();
  const emptyPostData = {
    text: '',
  };
  const [postData, setPostData] = useState(emptyPostData);

  const formSubmit = (data: any): void => {
    const url = 'http://localhost:3001/api/v1/post/create';
    const config = { headers: { 'content-type': 'multipart/form-data' } };
  
    axios.post(url, data, config)
      .then((res) => {
        console.log(res);
        setPostData(emptyPostData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('text', postData.text);
    formSubmit(formData);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => setPostData({ ...postData, [e.target.name]: e.target.value });
  
  return (
    <main>
      <StyledForm ref={form.current} onSubmit={handleSubmit}>
        <TextField multiline id='text' name='text' label="Woof's on your mind?" size='small' value={postData.text} onChange={(e) => handleChange(e)} />
        <Button type='submit' variant='contained'>Post</Button>
      </StyledForm>
    </main>
  );
};

export default PostForm;
