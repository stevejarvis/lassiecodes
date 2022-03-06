import Layout from '../components/layout'
import Faq from '../components/faq'
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
      { Faq(
        'what-if-damaged',
        'What if a QR code gets damaged?',
        `QR codes are surprisingly resilient to damage, so if you see one that is scraped up from a crash, 
        it's still worth a try. There certainly is a limit to the amount of code that can be damaged and 
        still work, though, so if you do have a damaged code, replace it as soon as possible. 
        To have a backup in case of a crash, it's recommended to have more than 1 on 
        your person. For example, place one on each side of your helmet, or one on your helmet and another
        on your frame.`
      ) }

      { Faq(
        'how-well-do-these-codes-work',
        'How well do these work?', 
        `Great question! Most smartphones these days are capable of triggering phone calls from QR codes and NFC tags 
        without any extra apps. QR codes are just scanned when in the camera frame, and NFC tags are scanned when they  
        come near of the phone's NFC reader (within a few centimeters).
        However, the functionality is not universal, so it's recommended to have those you ride with test that their 
        phones do have these features. It's also recommended that the codes are tested from time-to-time to ensure 
        they are still working and not damaged.`
      ) }

      { Faq(
        'can-i-use-nfc-on-metal',
        'Can I put the NFC tag on metal?',
        `No, you can't use the NFC tag on anything metal or conductive. NFC tags use 
        magnetic induction for power on read, and that won't work if on a conductive surface.`
      )}
    </Layout>
  )
}

export default Support
