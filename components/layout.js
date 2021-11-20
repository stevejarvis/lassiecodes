import Head from 'next/head'
import Header from './header'
import globalStyles from '../styles/global.js'

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>

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
