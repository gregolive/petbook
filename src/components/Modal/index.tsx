import styled from 'styled-components';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

interface ModalProps {
  handleClose: Function;
  text: string;
};

const StyledModal = styled(motion.div)`
  border-radius: 1rem;
  margin: auto;
  padding: 0 2rem;
  width: clamp(50%, 700px, 90%);
  height: min(50%, 300px);
  display: flex;
  align-items: center;
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
}

const Modal = ({ handleClose, text }: ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        as={motion.div}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        variants={dropIn}
      >
        
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
