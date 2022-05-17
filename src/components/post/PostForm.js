import { useRef, useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const form = useRef();
  const [postData, setPostData] = useState({
    title: '',
    body: '',
  });

  const formSubmit = (data) => {
    const url = 'http://localhost:3001/api/v1/post/create';
    const config = { headers: { 'content-type': 'multipart/form-data' } };
  
    axios.post(url, data, config)
      .then((res) => {
          console.log(res);
      })
      .catch((err) => {
          console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('body', postData.body);
    formSubmit(formData);
  };
  
  const handleChange = (e) => setPostData({ ...postData, [e.target.name]: e.target.value });
  
  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <input type='text' id='title' name='title' placeholder='Title' value={postData.title} onChange={handleChange} />
        <textarea id='body' name='body' placeholder='Body' value={postData.body} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default PostForm;
