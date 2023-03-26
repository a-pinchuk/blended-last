import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Modal } from '../../components/Modal/Modal';

import { fetchOneUser } from '../../redux/users/userApi';
import { getUser } from '../../redux/users/userSelectors';

export const UsersDetailsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [id, setId] = useState('');

  const { usersId } = useParams();

  useEffect(() => {
    dispatch(fetchOneUser(usersId));
  }, [dispatch, usersId]);

  const openModal = id => {
    setId(id);
  };

  const closeModal = () => {
    setId('');
  };

  return (
    <div>
      {user && (
        <div>
          <p>Name: {user.name} </p>
          <img src={`${user.avatar}`} alt={`${user.name}`} />
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button
            type="button"
            onClick={() => {
              openModal(user.id);
            }}
          >
            Delete
          </button>

          {id && <Modal id={id} closeModal={closeModal} />}
        </div>
      )}
    </div>
  );
};
