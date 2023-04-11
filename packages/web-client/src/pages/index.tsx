import Head from 'next/head';
import type { NextPage } from 'next';
import HomePage from './home';

const Main: NextPage = () => (
  <>
    <Head>
      <title>BookLab</title>
      <meta name="description" content="Booklab" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomePage />
  </>
);

export default Main;
