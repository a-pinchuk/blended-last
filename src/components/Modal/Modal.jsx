import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteOneUser } from '../../redux/users/userApi';
import { ModalWindow, Overlay } from './Modal.styled';

export const Modal = ({ id, closeModal }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteUser = () => {
    dispatch(deleteOneUser(id));
    navigate('/users');
  };

  return (
    <Overlay>
      <ModalWindow>
        <p>Are you sure?</p>
        <button onClick={deleteUser}>Yes</button>
        <button onClick={closeModal}>No</button>
      </ModalWindow>
    </Overlay>
  );
};
