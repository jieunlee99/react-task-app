import { useTypedSelector } from "./redux";

export function useAuth() {
  const { id, email } = useTypedSelector((state) => state.user);

  return {
    // email이 있을 시 true
    isAuth: !!email,
    email,
    id,
  };
}
