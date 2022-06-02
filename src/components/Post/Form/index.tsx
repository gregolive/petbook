import { useRef, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StyledForm } from './styled';

interface FormProps {
  token: string;
};

const PostForm = ({ token }: FormProps) => {
  const form = useRef();
  const emptyPostData = {
    text: '',
  };
  const [postData, setPostData] = useState(emptyPostData);

  const buildFormData = () => {
    const formData = new FormData();
    formData.append('text', postData.text);

    return formData;
  };

  const formSubmit = (): void => {
    const data = buildFormData();
    const url = 'http://localhost:3001/api/v1/post/create';
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
      },
    };
  
    axios.post(url, data, config)
      .then((res) => {
        console.log(res);
        setPostData(emptyPostData);
      }, (err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const validForm = (e.target as HTMLFormElement).checkValidity();
    console.log(validForm);
    if (validForm) {
      formSubmit();
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => setPostData({ ...postData, [e.target.name]: e.target.value });
  
  return (
    <>
      <StyledForm ref={form.current} onSubmit={handleSubmit} noValidate>
        <TextField
          multiline
          id='text'
          name='text'
          label="Woof's on your mind?"
          size='small'
          value={postData.text}
          onChange={(e) => handleChange(e)}
          required
          InputLabelProps={{ required: false }}
        />
        <Button type='submit' variant='contained'>Post</Button>
      </StyledForm>
    </>
  );
};

export default PostForm;
