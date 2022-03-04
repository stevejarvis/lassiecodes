import Layout from '../components/layout'
import { useUser } from '@auth0/nextjs-auth0'
import Figure from 'react-bootstrap/Figure'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Support() {
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
        Both QR codes and NFC tags can be programmed with a telephone number in a way that 
        most modern smartphones will read and automatically prompt to call. The codes from 
        Lassie.Codes are meant to do just that: prompt a phone call to the wearer's emergency 
        contact when scanned. Simple and effective.
      </p>
      <p>
        Ride fast, ride safe.
      </p>

      <h1>FAQ</h1>
      <h3 id="how-well-do-these-codes-work"><a href="#how-well-do-these-codes-work"><FontAwesomeIcon icon="fa-solid fa-link"/></a> How well do these work?</h3>
      <p>
        Great question! Most smartphones these days are capable of triggering phone calls from QR codes and NFC tags 
        without any extra apps. QR codes are just scanned when in the camera frame, and NFC tags are scanned when they 
        come near of the phone's NFC reader (within a few centimeters).
      </p>
      <p>
        However, the functionality is not universal, so it's recommended to have those you ride with test that their 
        phones do have these features. It's also recommended that the codes are tested from time-to-time to ensure 
        they are still working and not damaged.
      </p>

      <h3 id="can-i-use-nfc-on-metal"><a href="#can-i-use-nfc-on-metal"><FontAwesomeIcon icon="fa-solid fa-link"/></a> Can I use the NFC tag on a metal frame?</h3>
      <p>
        No, you can't use the NFC tag on a metal frame, or anything else metallic or conductive. NFC tags use 
        magnetic induction for power on read, and that won't work if on a conductive surface.
      </p>
      <p>
        <i>Note: There are actually tags that <em>do</em> still work on metal surfaces, but they're more expensive,
        and as of now, we don't have those available.</i>
      </p>
    </Layout>
  )
}

export default Support
