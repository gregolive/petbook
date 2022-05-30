import Modal from '../../Modal';
import RegisterForm from './Form';

interface RegisterProps {
  setShowSignup: Function;
};

const Register = ({ setShowSignup }: RegisterProps) => {
  return (
    <Modal handleClose={() => setShowSignup(false)}>
      <RegisterForm />
    </Modal>
  );
};

export default Register;
