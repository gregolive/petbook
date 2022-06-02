export type User = {
  _id: string;
  username: string;
  name: string;
  email?: string;
  url: string;
};

export type Post = {
  author: User;
  text?: string;
  image?: any;
  url: string;
  created_at: string;
};
