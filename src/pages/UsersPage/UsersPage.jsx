import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../redux/users/userApi';
import { getUsers } from '../../redux/users/userSelectors';

export const UsersPage = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <ul>
        {users.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="add">Add new User</Link>
    </>
  );
};
