import { useAppSelector } from './redux-hooks';

export const useAuth = () => {
  const { email, token, id, pending } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    pending,
  };
};
