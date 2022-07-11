import { useState, useEffect } from 'react';
import { useAuth } from '../../Auth';
import axios from 'axios';
import { User, Post } from '../../../types';
import PostForm from '../Form';
import PostList from '../List';
import PostSkeleton from '../Skeleton';
import { StyledPostFeed, CenterFeed, LeftFeed, RightFeed } from './styled';

const PostFeed = () => {
  const { token } = useAuth();
  const [user, setUser] = useState<User>({
    _id: '',
    username: '',
    name: '',
    email: '',
    url: '',
  });
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch feed data
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/v1/post/index`;
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

  const updateFeed = () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/v1/post/index/${page}`;
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
      },
    };
  
    axios.get(url, config)
      .then((res) => {
        setPosts([...posts, ...res.data.posts]);
        setPage(page + 1);
      }, (err) => {
        console.log(err);
      });
  };

  const addPost = (post: Post) => setPosts([post, ...posts]);

  return (
    <StyledPostFeed>
      {(loading) ? (
        <PostSkeleton count={2} />
      ) : (
        <>
          <LeftFeed>

          </LeftFeed>

          <CenterFeed>
            <PostForm addPost={addPost} />
            <PostList user={user} posts={posts} update={updateFeed} />
          </CenterFeed>
          
          <RightFeed>

          </RightFeed>
        </>
      )}
    </StyledPostFeed>
  );
};

export default PostFeed;
