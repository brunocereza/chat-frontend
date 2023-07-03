import { auth } from "@/service/auth";
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";

type AuthContextType = {
  isLogged: boolean;
  user: string | null;
  login: (data: loginData) => Promise<void>;
};

type loginData = {
  username: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const isLogged = !!user;

  useEffect(() => {
    const { "chat-token": token } = parseCookies();

    if (token) {
      auth.refreshToken(token).then((response) => {
        console.log(response.user.name, "RESPONSE TOKEN");

        setUser(response.user.name);
      });
    }
  }, []);

  async function login({ username, password }: loginData): Promise<void> {
    try {
      const { access_token, user } = await auth.login({ username, password });

      setCookie(undefined, "chat-token", access_token, { maxAge: 60 * 60 * 2 }); // 2 horas
      setUser(user.name);
      Router.push("/chat/lobby");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLogged, login }}>
      {children}
    </AuthContext.Provider>
  );
}
