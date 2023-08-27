import React from "react";
import NextProgressBar from "nextjs-progressbar";
import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { TypeComponentAuthField } from "@/providers/PrivateRouter.types";

type TypeAppProps = AppProps & TypeComponentAuthField;

const App: NextPage<TypeAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <NextProgressBar
              color="#0075FF"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
            />
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta
                name="description"
                content="Heart of Unity"
              />
              <meta name="author" content="kiko" />
              <meta name="copyright" content="kiko" />
              <title>Heart of Unity</title>
            </Head>
            <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
