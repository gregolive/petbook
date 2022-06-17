import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { User, Post } from '../../../types';
import PostCard from '../Card';

interface PostListProps {
  user: User;
  posts: Array<Post>;
  update: Function;
};

const StyledList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const PostList = ({ user, posts, update }: PostListProps) => {
  const [scroll, setScroll] = useState(0);
  const [loading, setLoading] = useState(false);

  const updateList = async () => {
    setLoading(true);
    await update();
    setLoading(false);
  };

  // infinite list
  useEffect(() => {
    const handleScroll = (e: any) => setScroll(e.target.documentElement.scrollTop);
    window.addEventListener('scroll', handleScroll, { passive: true });

    if ((scroll + window.innerHeight) / document.body.scrollHeight > 0.9) {
      updateList();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll]); // eslint-disable-line

  return (
    <StyledList>
      {posts && posts.map((post, i) =>
        <PostCard user={user} post={post} key={i} />
      )}
      
      {loading && 
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      }
    </StyledList>
  );
};

export default PostList;
