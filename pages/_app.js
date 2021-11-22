/**
 * https://nextjs.org/docs/advanced-features/custom-app
 * 
 * Basically this is required to use the Auth0 lib.
 */
// import App from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
