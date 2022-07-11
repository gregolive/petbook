import { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../Auth';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { StyledForm, InputRow } from './styled';

interface FormProps {
  postId: string,
  listView: boolean;
};

const CommentForm = ({ postId, listView }: FormProps) => {
  const { token } = useAuth();
  const form = useRef();
  const [commentData, setCommentData] = useState({
    text: '',
  });

  const resetForm = () => setCommentData({
    text: '',
  });

  const buildFormData = () => {
    const formData = new FormData();
    formData.append('text', commentData.text);

    return formData;
  };

  const formSubmit = (): void => {
    const data = buildFormData();
    const url = `${process.env.REACT_APP_SERVER_URL}/api/v1/post/${postId}/comment/create`;
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
      },
    };
  
    axios.post(url, data, config)
      .then((res) => {
        console.log(res.data)
        //addPost(res.data.post);
        //resetForm();
      }, (err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const validForm = (e.target as HTMLFormElement).checkValidity();
    if (validForm) {
      formSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => setCommentData({ ...commentData, text: e.target.value });

  return (
    <StyledForm ref={form.current} onSubmit={handleSubmit} noValidate>
      <InputRow>
        <TextField
          multiline
          id='text'
          name='text'
          label='Add a comment...'
          size='small'
          variant='filled'
          value={commentData.text}
          onChange={(e) => handleChange(e)}
          required
          InputLabelProps={{ required: false }}
        />
        
        <Button type='submit' color='primary'>
          <SendIcon />
        </Button>
      </InputRow>
    </StyledForm>
  );
};

export default CommentForm;
