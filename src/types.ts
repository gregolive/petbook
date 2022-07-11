export type User = {
  _id: string;
  username: string;
  name: string;
  email?: string;
  url: string;
};

export type Post = {
  _id: string;
  text: string;
  image: string | null;
  author: User;
  url: string;
  createdAt: string;
};
