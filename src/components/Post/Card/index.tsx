import { motion } from 'framer-motion';
import { formatDistanceToNow, parseISO } from 'date-fns';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { User, Post } from '../../../types';
import CardMenu from './CardMenu';
import CommentForm from '../../Comment/Form';
import { StyledCard, CardButton } from './styled';

interface PostCardProps {
  user: User;
  post: Post;
};

const PostCard = ({ user, post }: PostCardProps) => {
  const { _id: postId, text, image, author, createdAt, url: postUrl } = post;
  const { username: authorUsername, name: authorName, url: authorUrl } = author;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <StyledCard>
        <CardHeader
          avatar={<Avatar alt={`${authorUsername} avatar`} src='https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg' />}
          action={<CardMenu />}
          title={authorName}
          subheader={`${formatDistanceToNow(parseISO(createdAt))} ago`}
        />  
      
        {image && (
          <CardMedia
            component='img'
            image={`https://petbook-social.s3.ap-northeast-1.amazonaws.com/${image}`}
            alt={`${authorName} ${createdAt}`}
          />
        )}
        
        {text && (
          <CardContent>
            <Typography variant='body1' color='text.secondary' component='p'>
              {text}
            </Typography>
          </CardContent>
        )}

        <CardActions>
          <CardButton>3 Likes</CardButton>
          <CardButton>2 Comments</CardButton>
        </CardActions>

        <Divider />

        <CardActions>
          <Button size='small' startIcon={<ThumbUpIcon />}>Like</Button>
          <Button size='small' startIcon={<ModeCommentIcon />}>Comment</Button>
        </CardActions>

        <Divider />

        <CommentForm postId={postId} listView={true} />
      </StyledCard>
    </motion.div>
  );
};

export default PostCard;