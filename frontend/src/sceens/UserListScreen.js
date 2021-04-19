import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import Message from '../components/Message';
import { listUsers } from '../actions/userAction';

const UserListScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  const deleteHander = (id) => {
    console.log('DElete');
  };

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient='danger'>{error}</Message>
      ) : (
        <Table striped borderd hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={users._id}>
                <td>{users._id}</td>
                <td>{users.name}</td>
                <td>
                  <i href={`mailto:${user.email}`}></i>
                  {users.email}
                </td>
                <td>
                  {user.idAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/user/${user._id}/edit`}>
                    <button varient='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </button>
                  </LinkContainer>
                  <Button
                    varient='danger'
                    className='btn-sm'
                    onClick={() => deleteHander(user._id)}
                  >
                    <i className='fa fas-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
