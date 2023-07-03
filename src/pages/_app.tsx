import { contextAlert } from "@/context/alertaccountCreate";
import { AuthProvider } from "@/context/auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Home, HomeContent } from "./styles";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { alertState } = contextAlert();

  return (
    <AuthProvider>
      <Home>
        <HomeContent>
          <Component {...pageProps} />
        </HomeContent>
      </Home>
    </AuthProvider>
  );
}
