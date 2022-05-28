import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from './Backdrop';

interface ModalProps {
  children?: any;
  handleClose: Function;
};

const StyledModal = styled(motion.div)`
  background: ${(props) => props.theme.custom.background};
  border-radius: 0.5rem;
  margin: auto;
  padding: 0 2rem;
  width: clamp(50%, 700px, 90%);
  height: min(50%, 300px);
  display: flex;
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
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
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
      </AnimatePresence>
    </Backdrop>
  );
};

export default Modal;
