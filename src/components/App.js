import { UsersAddPage } from 'pages/UsersAddPage/UsersAddPage';
import { Route, Routes } from 'react-router-dom';
import { UsersDetailsPage } from '../pages/UsersDetailsPage/UsersDetailsPage';
import { UsersPage } from '../pages/UsersPage/UsersPage';
import { HomePage } from './HomePage/HomePage';
import { Layout } from './Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:usersId" element={<UsersDetailsPage />} />
        <Route path="/users/add" element={<UsersAddPage />} />
      </Route>
    </Routes>
  );
}

export default App;

// https://641fef4d82bea25f6df72176.mockapi.io/:endpoint
