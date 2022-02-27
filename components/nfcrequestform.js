import contactFormStyles from '../styles/contactform.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
        <Form.Control type="tel" placeholder="Enter contact phone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Contact name</Form.Label>
        <Form.Control type="text" placeholder="Enter contact name" />
        <Form.Text className="text-muted">
          We'll never share your info with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Comments or notes</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" />
        <Form.Text className="text-muted">
          Anything else you'd like us to know?
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Request
      </Button>
    </Form>
  )
}

export default NfcTagRequestForm
