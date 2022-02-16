import User from '../../users/user.entity';

const mockedUser: User = {
  id: 1,
  email: 'test@test.com',
  name: 'test',
  password: 'hash',
  isEmailConfirmed: false,
  isRegisteredWithGoogle: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default mockedUser;
