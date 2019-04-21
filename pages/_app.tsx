import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../src/store";
import { IntlProvider } from "react-intl";

export default withRedux(initStore)(
  class MyApp extends App<any> {
    static async getInitialProps({ Component, ctx }: any) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <IntlProvider>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </IntlProvider>
        </Container>
      );
    }
  }
);
