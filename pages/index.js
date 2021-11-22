import Layout from '../components/layout'
import { useNumberUpdater } from '../lib/user'
import { useUser } from '@auth0/nextjs-auth0'

function Home() {
  const { user, error, isLoading } = useUser()
  const { primaryContact, updatePrimaryContact } = useNumberUpdater()

  return (
    <Layout user={user} loading={isLoading}>
      <h1>Next.js and Auth0 Example</h1>

      {isLoading && <p>Loading login info...</p>}

      {!isLoading && !user && (
        <>
          <p>
            To test the login bits click <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{' '}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <img src={user.picture} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
          <p>primary contact: {primaryContact}</p>

          <form onSubmit={updatePrimaryContact}>
            <label htmlFor="phone number">Phone Number</label>
            <input id="number" type="phone" autoComplete="phone number" required />
            <button type="submit">Update</button>
          </form>
        </>
      )}
    </Layout>
  )
}

export default Home
