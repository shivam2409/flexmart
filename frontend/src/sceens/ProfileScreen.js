import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import Message from '../components/Message';
import { getUserDetails, updateUserProfile } from '../actions/userAction';
import { listMyOrders } from '../actions/orderActions';

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderMyList = useSelector((state) => state.orderMyList);
  const { loading: loadingOrders, error: errororders } = orderMyList;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, user, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Password do not match');
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message varient='danger'>{message}</Message>}
        {error && <Message varient='danger'>{error}</Message>}
        {success && <Message varient='success'>{success}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>
              Name
              <Form.Control
                type='name'
                placeholder='Enter Email'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Label>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>
              Email Address
              <Form.Control
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>
              Password
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Label>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>
              Confirm Password
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Label>
          </Form.Group>
          <Button type='submit' varient='primary'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}></Col>
    </Row>
  );
};

export default ProfileScreen;
