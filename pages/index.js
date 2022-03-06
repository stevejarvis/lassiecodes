import Layout from '../components/layout'
import QrCode from '../components/qrcode'
import QrIntro from '../components/qrintro'
import UpdateContactUpdateForm from '../components/updatecontactform'
import NfcTagRequestForm from '../components/nfcrequestform'
import { useContactUpdater } from '../lib/user'
import { useRequestSubmitter } from '../lib/nfcrequest'
import { useUser } from '@auth0/nextjs-auth0'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'

function Home() {
  const { user, error, isLoading } = useUser()
  const { primaryContact, updatePrimaryContact, setActivePrimaryContact } = useContactUpdater()
  const { submitNfcTagRequest } = useRequestSubmitter()

  return (
    <Layout user={user} loading={isLoading}>
      <QrIntro/>
      <h1>Lassie Codes</h1>
      <p>
        There are two options for a code: A QR code and an NFC tag.
      </p>

      <Tabs defaultActiveKey="qr" id="code-select" className="mb-3">
        <Tab eventKey="qr" title="QR (you print)">
          {isLoading && <p>Loading login info...</p>}
          {!isLoading && !user && (
            <>
              <p>
                To save your stuff and include your own name, just <Button variant="primary" href="/api/auth/login">login</Button>
              </p>
              <UpdateContactUpdateForm submitFunc={setActivePrimaryContact}/>
              <QrCode primaryContact={primaryContact}/>
            </>
          )}

          {user && (
            <>
              <UpdateContactUpdateForm submitFunc={updatePrimaryContact} primaryContact={primaryContact}/>
              <QrCode primaryContact={primaryContact} subjectName={user.given_name}/>
            </>
          )}
        </Tab>
        <Tab eventKey="nfc" title="NFC (we ship)">
          {isLoading && <p>Loading login info...</p>}
          {!isLoading && !user && (
            <>
              <p>
                To request an NFC tag, you must <Button variant="primary" href="/api/auth/login">login</Button>
              </p>
            </>
          )}

          {user && (
            <>
              <NfcTagRequestForm requestFunc={submitNfcTagRequest}/>
            </>
          )}
        </Tab>
      </Tabs>
    </Layout>
  )
}

export default Home
