import Modal from '../../Modal';
import RegisterForm from './Form';

interface RegisterProps {
  setShowLogin: Function;
  setShowSignup: Function;
};

const Register = ({ setShowLogin, setShowSignup }: RegisterProps) => {
  const closeModal = (): void => setShowSignup(false);

  const changeModal = (): void => {
    closeModal();
    setShowLogin(true);
  };

  return (
    <Modal handleClose={() => setShowSignup(false)}>
      <RegisterForm closeModal={closeModal} changeModal={changeModal} />
    </Modal>
  );
};

export default Register;
