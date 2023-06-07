import { useState, ReactNode, createContext, useEffect } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

export interface UserProps {
  email: string;
  given_name: string;
  name: string;
  picture: string;
}

export interface AuthContextProps {
  user: UserProps;
  Login: Function;
  Logout: Function;
  isGuest: boolean;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const initialState: UserProps = {
    email: "",
    given_name: "guest",
    name: "",
    picture: "",
  };

  const [user, setUser] = useState<UserProps>({ ...initialState } as UserProps);
  const [isGuest, setGuest] = useState<boolean>(true);

  useEffect(() => {
    if (user.given_name !== "guest") setGuest(false);
  }, [user]);

  const Login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        await axios
          .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          })
          .then((data) => {
            console.log(data.data);
            setUser(data.data);
          });
      } catch (err) {
        console.log(err);
      }
    },
  });

  const Logout = () => {
    googleLogout();
    setUser({ ...initialState });
    setGuest(true);
  };

  return (
    <AuthContext.Provider value={{ user, Login, Logout, isGuest }}>
      {children}
    </AuthContext.Provider>
  );
}
