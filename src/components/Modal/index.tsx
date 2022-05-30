import styled from 'styled-components';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

interface ModalProps {
  children?: any;
  handleClose: Function;
};

const StyledModal = styled(motion.div)`
  background: ${(props) => props.theme.custom.background};
  border-radius: 0.5rem;
  margin: auto;
  padding: 1.5rem 2rem 1rem 2rem;
  width: clamp(40%, 30rem, 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const dropIn = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    y: '100vh',
  },
};

const Modal = ({ children, handleClose }: ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        drag
      >
        {children}
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
