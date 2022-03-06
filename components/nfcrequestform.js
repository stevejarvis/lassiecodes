import contactFormStyles from '../styles/contactform.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import consentCheckbox from './consent-checkbox.js'

function NfcTagRequestForm({ requestFunc }) {
  /**
   * Component renders the form for ordering an NTAG. Needs address and updating a primary contact.
   */

  //const phonePlaceholder = (primaryContact && primaryContact.number) ? primaryContact.number : "Phone number"
  //const contactPlaceholder = (primaryContact && primaryContact.name) ? primaryContact.name : "Contact name"

  return (
    // Info we want in this request:
    // 1) Contact number 2) free form text/message.
    // Since we require login, we already have a name and contact
    // info. Might not be verified but whatevs.
    <Form onSubmit={requestFunc}>
      <Form.Group className="mb-3" controlId="number">
        <Form.Label>Contact phone</Form.Label>
        <Form.Control required type="tel" placeholder="Enter emergency contact phone number" />
        <Form.Text className="text-muted">
          This is the number that will be programmed into the NFC tag. 
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Contact name</Form.Label>
        <Form.Control required type="text" placeholder="Enter emergency contact name" />
        <Form.Text className="text-muted">
          Name of the emergency contact.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="mailingStreet">
        <Form.Label>Street address</Form.Label>
        <Form.Control required type="text" placeholder="Enter street for mailing address" />
        <Form.Text className="text-muted">
          For mailing the NFC tag to you.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="mailingCity">
        <Form.Label>City, State, and Zip address</Form.Label>
        <Form.Control required type="text" placeholder="Enter city, state, and zip for mailing address" />
        <Form.Text className="text-muted">
          For mailing the NFC tag to you.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Comments or notes</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" />
        <Form.Text className="text-muted">
          Anything else you'd like us to know?
        </Form.Text>
      </Form.Group>
      {consentCheckbox()}
      <Button variant="primary" type="submit">
        Request
      </Button>
    </Form>
  )
}

export default NfcTagRequestForm
