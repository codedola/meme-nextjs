import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/fonts/font-awesome/css/font-awesome.css";
import "../assets/css/style.css";
//
import React, { useMemo, useEffect } from "react";
import App, { AppContext, AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Head from "next/head";
import cookie from "cookie";
import Cookies from "js-cookie";
import { parseJwt } from "../helpers";
import userService from "../services/userService";
import { useGlobalState } from "../state";
import { actLogin } from "../state/userAction";
import { actGetListCategory } from "../state/categoriesAction";
import { dispatch } from "../state";
import categoryService from "../services/categoryService";
function MyApp({ Component, pageProps, router }: AppProps) {
  const [, setCurrentUser] = useGlobalState("currentUser");
  const [, setToken] = useGlobalState("currentUser");
  // useEffect(() => {
  //   setGlobalState("token", pageProps.token);
  //   setGlobalState("currentUser", pageProps.userInfo);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useMemo(() => {
    const { token, userInfo: currentUser, categories } = pageProps;
    dispatch(
      actLogin({
        token,
        currentUser,
      })
    );
    dispatch(actGetListCategory(categories));
  }, []);

  const hiddenFooter = useMemo(
    function () {
      const includePaths = ["/", "/posts/[postid]"];
      const currentPath = router.pathname;
      return includePaths.includes(currentPath);
    },
    [router.pathname]
  );

  const hiddenHeader = useMemo(
    function () {
      const includePaths = ["/login", "/register"];
      const currentPath = router.pathname;
      return includePaths.includes(currentPath);
    },
    [router.pathname]
  );
  return (
    <div id="root">
      <Head>
        <title>Cộng đồng chế ảnh ZendVN</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
        <meta name="keywords" content="HTML5 Template" />
        <meta name="description" content="Cộng đồng chế ảnh ZendVN" />
        <meta name="author" content="etheme.com" />
        <style data-href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"></style>

        {/* JAVA SCRIPT */}
        {/* require */}
        {/*  */}
        {/* HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries */}
        {/*[if lt IE 9]>
	      <![endif]*/}
      </Head>

      {!hiddenHeader ? <Header /> : null}
      <main>
        <Component {...pageProps} />
      </main>
      {!hiddenFooter ? <Footer /> : null}
    </div>
  );
}

type TUserToken = {
  id?: string;
  email?: string;
};

MyApp.getInitialProps = async (context: AppContext) => {
  let userRes = null;
  let categoriesRes = null;
  let token = "";
  const appProps = await App.getInitialProps(context);
  if (typeof window === "undefined") {
    // SSR
    const cookieStr = context.ctx.req.headers.cookie || "";
    token = cookie.parse(cookieStr).token;

    const userToken: TUserToken | null = parseJwt(token);

    if (userToken && userToken.id) {
      userRes = await userService.getUserByID(userToken.id);
    }
    categoriesRes = await categoryService.getList();
  } else {
    // CSR
    const _token = Cookies.get("token");
    if (!parseJwt(_token)) {
      Cookies.remove("token");
    } else {
      token = _token;
    }
  }

  return {
    pageProps: {
      ...appProps.pageProps,
      token,
      categories: categoriesRes?.categories || [],
      userInfo: userRes?.user || null,
    },
  };
};

export default MyApp;
