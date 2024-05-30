/* eslint-disable @next/next/no-img-element */
"use client";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "../components/container";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer/footer";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps: { ...pageProps } }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleShow = () => {
    setMobileNav(true);
  };

  const [auth, setAuth] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (
      pathname === "/login" ||
      pathname === "/forgot-password" ||
      pathname === "/reset"
    ) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
