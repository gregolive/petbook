export type User = {
  _id: string;
  username: string;
  name: string;
  email?: string;
  url: string;
};

export type Post = {
  author: User;
  text: string;
  image: string | null;
  url: string;
  createdAt: string;
};
