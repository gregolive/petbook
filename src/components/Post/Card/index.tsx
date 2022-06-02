import styled from 'styled-components';
import { formatDistanceToNow, parseISO } from 'date-fns';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { User, Post } from '../../../types';

interface PostCardProps {
  user: User;
  post: Post;
};

const StyledCard = styled(Card)`
  box-shadow: 0px 5px 5px -3px ${(props) => props.theme.custom.shadow},
              0px 8px 10px 2px ${(props) => props.theme.custom.shadow},
              0px 1px 3px 0px ${(props) => props.theme.custom.shadow} !important;
`;

const PostCard = ({ user, post }: PostCardProps) => {
  const { author, created_at, url: postUrl } = post;
  const { username: authorUsername, name: authorName, url: authorUrl } = author;

  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar alt={`${authorUsername} avatar`} src='https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg' />}
        action={
          <IconButton aria-label='see more'>
            <MoreVertIcon />
          </IconButton>
        }
        title={authorName}
        subheader={`${formatDistanceToNow(parseISO(created_at))} ago`}
      />  
    
      {post.image && (
        <CardMedia
          component='img'
          image='https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512'
          alt='Nicola Sturgeon on a TED talk stage'
        />
      )}
      
      {post.text && (
        <CardContent>
          <Typography variant='body1' color='text.secondary' component='p'>
            {post.text}
          </Typography>
        </CardContent>
      )}
    </StyledCard>
  );
};

export default PostCard;