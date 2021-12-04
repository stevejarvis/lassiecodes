import Layout from '../components/layout'
import { useUser } from '@auth0/nextjs-auth0'

function About() {
  const { user, error, isLoading } = useUser()

  return (
    <Layout user={user} loading={isLoading}>
      <h1>About</h1>
      <p>
        Cycling and running are wonderful but can be dangerous. Let's hope we never need to 
        worry about emergency contacts, but these QR codes are meant to help in that worst
        case scenario. Generate a code that includes your emergency contact's info and tape it 
        to your helmet, top tube, shoe, whatever. Should you need help, anyone with you can 
        use the camera app on their smartphone to read the code and make the call.
      </p>
    </Layout>
  )
}

export default About
