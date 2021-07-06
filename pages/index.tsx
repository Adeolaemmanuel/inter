import Head from 'next/head'
import { Fragment } from 'react';
import List from '../components/Index/List';



export default function Home() {  

  return (
    <Fragment>
      <Head>
        <title>Test app</title>
      </Head>
      <List />
    </Fragment>
  )
}
