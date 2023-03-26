import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/users/userApi';

export const UsersAddPage = () => {
  const [nameUser, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'nameUser':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'avatar':
        setAvatar(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const newUser = {
      name: nameUser,
      avatar,
      email,
      phone,
    };

    const createdUser = await dispatch(addUser(newUser)).unwrap();

    navigate(`/users/${createdUser.id}`);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="nameUser"
            value={nameUser}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="avatar">
          Avatar
          <input
            type="url"
            name="avatar"
            value={avatar}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            type="number"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
};
