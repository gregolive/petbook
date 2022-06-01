import Modal from '../../Modal';
import LoginForm from './Form';

interface LoginProps {
  setShowLogin: Function;
  setShowSignup: Function;
};

const Login = ({ setShowLogin, setShowSignup }: LoginProps) => {
  const closeModal = (): void => setShowLogin(false);

  const changeModal = (): void => {
    closeModal();
    setShowSignup(true);
  };

  return (
    <Modal handleClose={() => setShowLogin(false)}>
      <LoginForm closeModal={closeModal} changeModal={changeModal}  />
    </Modal>
  );
};

export default Login;
