import { useState, ReactNode, createContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export interface UserProps {
  email: string;
  given_name: string;
  name: string;
  picture: string;
}

export interface AuthContextProps {
  user: UserProps;
  login: Function;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
         await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        ).then(data => {
            console.log(data.data)
            setUser(data.data)
        })
        
      } catch (err) {
        console.log(err);
      } 
    },
  });

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
