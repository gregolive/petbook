import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

interface PostSkeletonProps {
  count: number;
};

const StyledSkeleton = styled.div`
  grid-column: 1 / -1;
`;

const PostSkeleton = ({ count }: PostSkeletonProps) => {
  return (
    <StyledSkeleton>
      {[...Array(count)].map((num, i) =>
        <Card key={i}>
          <CardHeader
            avatar={<Skeleton animation='wave' variant='circular' width={40} height={40} />}
            action={null}
            title={<Skeleton animation='wave' height={10} width='80%' style={{ marginBottom: 6 }} />}
            subheader={<Skeleton animation='wave' height={10} width='40%' />}
          /> 
          <Skeleton sx={{ height: 190 }} animation='wave' variant='rectangular' />
          <CardContent>
            <Skeleton animation='wave' height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation='wave' height={10} width='80%' />
          </CardContent>
        </Card>
      )}
    </StyledSkeleton>
  );
};

export default PostSkeleton;
