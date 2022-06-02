import { useState, useEffect } from 'react';
import { useAuth } from '../../Auth';
import axios from 'axios';
import styled from 'styled-components';
import { User } from '../../../types';
import PostForm from '../Form';
import PostList from '../List';
import PostSkeleton from '../Skeleton';

const StyledPostFeed = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostFeed = () => {
  const { token } = useAuth();
  const [user, setUser] = useState<User>({
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
    <StyledPostFeed>
      {(loading) ? (
        <PostSkeleton count={2} />
      ) : (
        <>
          <PostForm token={token} />
          <PostList user={user} posts={posts}/>
        </>
      )}
    </StyledPostFeed>
  );
};

export default PostFeed;
