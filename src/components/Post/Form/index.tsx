import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CloseIcon from '@mui/icons-material/Close';
import { StyledForm, InputRow, ImagePreview } from './styled';

interface FormProps {
  token: string;
};

const PostForm = ({ token }: FormProps) => {
  const form = useRef();
  const [postData, setPostData] = useState({
    text: '',
    image: null as File | null,
  });
  const [imgPreview, setImgPreview] = useState('');

  // Create/remove image preview on postData image update
  useEffect(() => {
    if (!postData.image) {
      setImgPreview('');
      return;
    }

    const imgUrl = URL.createObjectURL(postData.image);
    setImgPreview(imgUrl);

    return () => URL.revokeObjectURL(imgUrl);
  }, [postData.image]);

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
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => setPostData({ ...postData, text: e.target.value });

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => setPostData({ ...postData, image: e.target.files![0] });

  const handleImgClose = (): void => setPostData({ ...postData, image: null });
  
  return (
    <>
      <StyledForm ref={form.current} onSubmit={handleSubmit} noValidate>
        <InputRow>
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
          
          <IconButton component='label' color='primary'>
            <PhotoCamera />
            <input
              id='image'
              name='image'
              type='file'
              hidden
              onChange={(e) => handleUpload(e)}
            />
          </IconButton>
        </InputRow>

        {postData.image &&
          <ImagePreview>
            <img src={imgPreview} alt='upload' />
            <IconButton size='small' onClick={() => handleImgClose()}>
              <CloseIcon color='error' />
            </IconButton>
          </ImagePreview>
        }
        
        <Button type='submit' variant='contained'>Post</Button>
      </StyledForm>
    </>
  );
};

export default PostForm;
