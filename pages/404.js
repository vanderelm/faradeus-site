import Head from 'next/head'
import Layout from '../components/layout'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <h1>Hello, Huillo! <br/> тут 404 👀</h1>
    </Layout>
  )
}