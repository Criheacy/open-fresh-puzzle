import { useAsyncFn } from "react-use";
import useUser from "../components/useUser";

const url = (endpoint: string) => "http://10.102.32.57:50102" + endpoint;

export const useLevelTracker = (levelId: number) => {
  const [user] = useUser();

  return useAsyncFn(() => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (user) {
      headers["X-ID"] = user.id;
      headers["X-USERNAME"] = encodeURIComponent(user.username);
    }

    return fetch(url("/level/pass"), {
      method: "POST",
      body: JSON.stringify({ levelId }),
      headers,
    });
  });
};
