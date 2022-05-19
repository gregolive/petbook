import { useRef, useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const form = useRef();
  const [postData, setPostData] = useState({
    text: '',
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
    formData.append('text', postData.text);
    formSubmit(formData);
  };
  
  const handleChange = (e) => setPostData({ ...postData, [e.target.name]: e.target.value });
  
  return (
    <main>
      <form ref={form} onSubmit={handleSubmit}>
        <textarea id='text' name='text' placeholder='Woof woof' value={postData.text} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default PostForm;
