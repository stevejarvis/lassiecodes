import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import globalStyles from '../styles/global.js'

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Lassie Codes</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
      `}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

export default Layout
