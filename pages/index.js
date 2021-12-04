import Layout from '../components/layout'
import QrCode from '../components/qrcode'
import ContactUpdateForm from '../components/contactform'
import { useContactUpdater } from '../lib/user'
import { useUser } from '@auth0/nextjs-auth0'

function Home() {
  const { user, error, isLoading } = useUser()
  const { primaryContact, updatePrimaryContact, setActivePrimaryContact } = useContactUpdater()

  return (
    <Layout user={user} loading={isLoading}>
      <h1>Lassie Codes</h1>

      {isLoading && <p>Loading login info...</p>}

      {!isLoading && !user && (
        <>
          <p>
            To save your stuff, click <i>Login</i>
          </p>
          <QrCode primaryContact={primaryContact}/>
          <ContactUpdateForm submitFunc={setActivePrimaryContact}/>
        </>
      )}

      {user && (
        <>
          <h4>User Info</h4>
          <img src={user.picture} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
          <QrCode primaryContact={primaryContact} subjectName={user.given_name}/>
          <ContactUpdateForm submitFunc={updatePrimaryContact}/>
        </>
      )}
    </Layout>
  )
}

export default Home
