import styled from 'styled-components';
import { User, Post } from '../../../types';
import PostCard from '../Card';

interface PostListProps {
  user: User;
  posts: Array<Post>;
};

const StyledList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const PostList = ({ user, posts }: PostListProps) => {
  return (
    <StyledList>
      {posts && posts.map((post, i) =>
        <PostCard user={user} post={post} key={i} />
      )}
    </StyledList>
  );
};

export default PostList;
