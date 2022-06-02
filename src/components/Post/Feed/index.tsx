import { useState, useEffect } from 'react';
import { useAuth } from '../../Auth';
import axios from 'axios';
import PostForm from '../Form';
import PostList from '../List';

const PostFeed = () => {
  const { token } = useAuth();
  const [user, setUser] = useState({
    _id: '',
    username: '',
    name: '',
    email: '',
    url: '',
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch feed data
  useEffect(() => {
    const url = 'http://localhost:3001/api/v1/post/index';
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
      },
    };
  
    axios.get(url, config)
      .then((res) => {
        setUser(res.data.user);
        setPosts(res.data.posts);
        setLoading(false);
      }, (err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <>
      <PostForm token={token} />
      <PostList user={user} posts={posts}/>
    </>
  )
};

export default PostFeed;
