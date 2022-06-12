import styled from 'styled-components';
import { motion } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CloseIcon from '@mui/icons-material/Close';

interface ImgPreviewProps {
  imgPreview: string;
  handleImgClose: Function;
};

const StyledImagePreview = styled(Card)`
  display: flex;
  justify-content: center;
  position: relative;

  img {
    width: 50%;
    height: auto;
  }
  
  button {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
  }
`;

const ImgPreview = ({ imgPreview, handleImgClose }: ImgPreviewProps) => {
  return (
      <motion.div
        initial={{ opacity: 0, scale: 0.25 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <StyledImagePreview >
          <img src={imgPreview} alt='upload' />

          <IconButton size='small' onClick={() => handleImgClose()}>
            <CloseIcon color='error' />
          </IconButton>
        </StyledImagePreview>
      </motion.div>
      
  );
};

export default ImgPreview;
