import Layout from '../components/layout'
import { useUser } from '@auth0/nextjs-auth0'
import Figure from 'react-bootstrap/Figure'

function About() {
  const { user, error, isLoading } = useUser()

  return (
    <Layout user={user} loading={isLoading}>
      <Figure>
        <Figure.Image
          src='./lookout_mtn.jpeg'
        />
        <Figure.Caption>
          Descending Lookout Mountain in Golden, CO.
        </Figure.Caption>
      </Figure>
      <h1>About</h1>
      <p>
        Cycling and running are wonderful but can be dangerous. Let's hope we never need to 
        worry about emergency contacts, but these QR codes are meant to help in that worst
        case scenario. Generate a code that includes your emergency contact's info and tape it 
        to your helmet, bike's top tube, shoe, whatever. Should you need help, anyone with you can 
        use the camera app on their smartphone to read the code and make the call.
      </p>
      <p>
        The QR codes offered here aren't anything too crazy; they 
        <a href="https://github.com/zxing/zxing/wiki/Barcode-Contents#telephone-numbers" target="_"> encode telephone numbers </a> 
        that modern smartphone cameras are programmed to act on by prompting to call the number. The codes
        here are tailored to the "call emergency contact" use case by including helpful text and being 
        a convenient but noticeable size. Simple and effective.
      </p>
      <p>
        Ride fast, ride safe.
      </p>
    </Layout>
  )
}

export default About
