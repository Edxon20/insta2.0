import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0 youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      <Feed />

      {/* FEED */}
      {/* MODAL */}
    </div>
  )
}

export default Home
