import {  } from './styled';

type User = {
  _id: string;
  username: string;
  name: string;
  email: string;
  url: string;
};

type Post = {
  text?: string;
};

interface PostListProps {
  user: User;
  posts: Array<Post>;
};

const PostList = ({ user, posts }: PostListProps) => {
  return (
    <>
      
    </>
  );
};

export default PostList;
