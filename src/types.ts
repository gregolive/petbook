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
  img_url: string | null;
  url: string;
  created_at: string;
};
