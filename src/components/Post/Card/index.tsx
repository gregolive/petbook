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
  display: grid;

  .MuiCardMedia-root {
    justify-self: center;
    width: 80%;
  }
`;

const PostCard = ({ user, post }: PostCardProps) => {
  const { text, image, author, createdAt, url: postUrl } = post;
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
    </StyledCard>
  );
};

export default PostCard;