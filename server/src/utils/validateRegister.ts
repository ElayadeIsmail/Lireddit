import { UsernamePasswordInput } from './UsernamePasswordInput';

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: 'username',
        message: 'length must be greater then 2',
      },
    ];
  }
  if (options.username.includes('@')) {
    return [{ field: 'username', message: 'must not contains @' }];
  }
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Invalid Email',
      },
    ];
  }
  if (options.password.length <= 3) {
    return [
      {
        field: 'password',
        message: 'length must be greater then 3',
      },
    ];
  }
  return null;
};
