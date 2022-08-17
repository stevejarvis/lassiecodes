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

      <h1 id="faq">FAQ</h1>
      { Faq(
        'what-is-qr-code',
        'What is a QR code?',
        `QR codes are square barcodes that can encode all kinds of information. Most smartphones 
        today can read QR codes with the builtin camera app and prompt the user to take action based
        on the contents of the code. The QR codes generated by Lassie Codes hold phone numbers, and 
        will trigger a prompt to call the designated emergency contact on phones that support it.`
      )}

      { Faq(
        'what-is-nfc-tag',
        'What is an NFC tag?',
        `NFC is a radio transmission over a very short distance, likely within "tap" distance, or just 
        a couple centimeters. An NFC tag stores a small amount of data that can be read by most modern
        smartphones when the phone is "tapped" against the tag. NFC tags can hold any data, and
        the tags generated by Lassie Codes hold phone numbers in a way that will prompt a call to 
        the designated emergency contact on phones that support it.`
      )}

      { Faq(
        'what-if-qr-damaged',
        'What if a QR code gets damaged?',
        `QR codes are surprisingly resilient to damage, so if you see one that is scraped up from a crash, 
        it's still worth a try. There certainly is a limit to the amount of code that can be damaged and 
        still work, though, so if you have a damaged code, replace it as soon as possible. 
        And for a backup, it's recommended to have more than one on your person in case one is damaged.
        For example, place one on each side of your helmet, or one on your helmet and another
        on your frame.`
      ) }

      { Faq(
        'what-if-nfc-damaged',
        'What if an NFC tag gets damaged?',
        `NFC tags are not resilient to damage. If a tag gets damaged, it will need to be replaced.`
      ) }

      { Faq(
        'can-i-use-nfc-on-metal',
        'Can I put the NFC tag on metal?',
        `No, you can't use the NFC tag on anything metal or conductive. NFC tags use 
        magnetic induction for power when being read, and that won't work if on a conductive surface.`
      )}

      { Faq(
        'how-do-i-know-it-works',
        'How do I know it works?', 
        `Great question! Most smartphones these days are capable of triggering phone calls from QR codes and NFC tags 
        without any extra apps. It's just nice builtin functionality the phone is ready to do out of the box. 
        QR codes are just scanned when in the camera frame, and NFC tags are scanned when they  
        come near of the phone's NFC reader (within a few centimeters).
        However, the functionality is not universal, so it's recommended to have those you ride with test that their 
        phones do have these features. It's also recommended that the codes are tested from time-to-time to ensure 
        they are still working and not damaged.`
      ) }

      { Faq(
        'nfc-tag-slow-to-scan',
        'Why is the NFC tag slow to scan?', 
        `Even though most smartphones from the past few years support NFC tags, scanning them
        can be a bit tricky. And for a couple reasons. In order to preserve battery life phones don't 
        look for tags 100% of the time, they turn the antenna on and off. And the range for NFC 
        is quite small (like less than a few centimeters). So in all, that means the part of 
        your phone that has the antenna (likely the top) needs to be very close to the 
        sticker for a few seconds.`
      ) }

    </Layout>
  )
}

export default Support
