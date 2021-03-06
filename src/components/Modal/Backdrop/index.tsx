import styled from 'styled-components';
import { motion } from 'framer-motion';

interface BackdropProps {
  children?: any;
  onClick: Function;
};

const StyledBackdrop = styled(motion.div)`
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <StyledBackdrop
      onClick={() => onClick()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
