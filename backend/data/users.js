import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin user',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shivam Patel',
    email: 'shivam@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Devi Shah',
    email: 'devi@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
