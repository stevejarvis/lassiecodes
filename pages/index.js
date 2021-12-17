import Layout from '../components/layout'
import QrCode from '../components/qrcode'
import Intro from '../components/intro'
import ContactUpdateForm from '../components/contactform'
import { useContactUpdater } from '../lib/user'
import { useUser } from '@auth0/nextjs-auth0'

function Home() {
  const { user, error, isLoading } = useUser()
  const { primaryContact, updatePrimaryContact, setActivePrimaryContact } = useContactUpdater()

  return (
    <Layout user={user} loading={isLoading}>
      <Intro/>
      <h1>Lassie Codes</h1>
      {isLoading && <p>Loading login info...</p>}
      {!isLoading && !user && (
        <>
          <p>
            To save your stuff, just <a href="/api/auth/login">Login</a>.
          </p>
          <ContactUpdateForm submitFunc={setActivePrimaryContact}/>
          <QrCode primaryContact={primaryContact}/>
        </>
      )}

      {user && (
        <>
          <ContactUpdateForm submitFunc={updatePrimaryContact}/>
          <QrCode primaryContact={primaryContact} subjectName={user.given_name}/>
        </>
      )}
    </Layout>
  )
}

export default Home
