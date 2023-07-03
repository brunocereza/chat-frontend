import { Session } from "next-auth";

export default function App({ Component, pageProps }) {
  return (
    <Session session={pageProps.session}>
      <Component {...pageProps} />
    </Session>
  );
}
