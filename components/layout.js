import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import globalStyles from '../styles/global.js'

function Layout({ user, loading = false, children }) {
  return (
    <div className="rootcontainer">
      <Head>
        <title>Lassie Codes</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>

      <Footer />

      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}

export default Layout
