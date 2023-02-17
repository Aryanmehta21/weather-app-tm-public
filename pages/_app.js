import "../styles/main.scss"
import Router from "next/router"
import React from "react"
import NProgress from "nprogress"

export default function App({ Component, pageProps }) {


  React.useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();


    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return() =>{
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    }


  }, [])
  return <Component {...pageProps} />
}