import "@/styles/global.css";
import Header from "@/components/header/header";
// import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log("router from _App", router);
  return (
    <>
      <Head>
        <title>Galaxy</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
