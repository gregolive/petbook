import Modal from '../../Modal';
import LoginForm from './Form';

interface LoginProps {
  setShowLogin: Function
};

const Login = ({ setShowLogin }: LoginProps) => {
  return (
    <Modal handleClose={() => setShowLogin(false)}>
      <LoginForm />
    </Modal>
  );
};

export default Login;
