import { AlertContainer } from "@/content/createAccount/styles";
import { Alert } from "@mui/material";
import type { AppProps } from "next/app";
import { Home, HomeContent } from "./styles";
import { ContextProvider, contextAlert } from "@/context/alertaccountCreate";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { alertState } = contextAlert();

  return (
    <ContextProvider>
      <Home>
        <HomeContent>
          <Component {...pageProps} />
        </HomeContent>
      </Home>
    </ContextProvider>
  );
}
