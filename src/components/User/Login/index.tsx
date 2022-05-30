import { useState } from 'react';
import Modal from '../../Modal';
import LoginForm from './Form';
import CircularProgress from '@mui/material/CircularProgress';

interface LoginProps {
  setShowLogin: Function;
  setShowSignup: Function;
};

const Login = ({ setShowLogin, setShowSignup }: LoginProps) => {
  const [loading, setLoading] = useState(false);

  const closeModal = (): void => setShowLogin(false);

  const changeModal = (): void => {
    closeModal();
    setShowSignup(true);
  };

  return (
    <Modal handleClose={() => setShowLogin(false)}>
      {(loading) ? (
        <CircularProgress />
      ) : (
        <LoginForm closeModal={closeModal} changeModal={changeModal} setLoading={setLoading} />
      )}
    </Modal>
  );
};

export default Login;
