import { useLocalStorage } from "react-use";

export type UserType = {
  id: string;
  username: string;
};

const useUser = () => {
  return useLocalStorage<UserType>("user");
};

export default useUser;
