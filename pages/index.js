import Layout from '../components/layout'
import { useNumberUpdater } from '../lib/user'
import { useUser } from '@auth0/nextjs-auth0'

function Home() {
  const { user, error, isLoading } = useUser()
  const { primaryContact, updatePrimaryContact } = useNumberUpdater()

  return (
    <Layout user={user} loading={isLoading}>
      <h1>Lassie Codes</h1>

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
          <h4>User Info</h4>
          <img src={user.picture} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
          <p>primary contact: {primaryContact}</p>

          <h5>Update Phone Number</h5>
          <form onSubmit={updatePrimaryContact}>
            <label htmlFor="phone number">Phone Number </label>
            <input id="number" type="phone" placeholder="phone number" autoComplete="phone number" required />
            <button type="submit">Update</button>
          </form>
        </>
      )}
    </Layout>
  )
}

export default Home
