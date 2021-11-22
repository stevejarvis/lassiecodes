import Layout from '../components/layout'
import { useUser } from '@auth0/nextjs-auth0';

function Privacy() {
  const { user, error, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      <h1>Privacy Policy</h1>

      <p>
        Lassie Codes does not share data, sell your data, or attempt to track you across 
        different web sites. Lassie Codes does not attempt to learn more about you than 
        you explicitly provide to the service, and then data is used for matters directly 
        related to the service itself (to provide QR Codes with phone numbers of trusted 
        individuals). 
      </p>

      <p>
        We use cookies to manage sessions and improve site experience and performance.
      </p>
    </Layout>
  )
}

export default Privacy
