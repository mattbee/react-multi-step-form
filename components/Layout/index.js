import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
import Header from '../Header';

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet"></link>
    </Head>
    <style jsx global>{`
      body {
        background: #2E2F81;
        font-size: ;
        color: #fff;
        font-family: 'Playfair Display', serif;
      }
    `}</style>

    <Header />

    {children}
  </div>

);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
