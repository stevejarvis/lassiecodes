import consentCheckbox from './consent-checkbox.js'
import contactFormStyles from '../styles/contactform.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function UpdateContactUpdateForm({ submitFunc, primaryContact }) {
  /**
   * Component renders the form for updating primary contact.
   */

  //const phonePlaceholder = (primaryContact && primaryContact.number) ? primaryContact.number : "Phone number"
  //const contactPlaceholder = (primaryContact && primaryContact.name) ? primaryContact.name : "Contact name"

  return (
    <Form onSubmit={submitFunc}>
      <Form.Group className="mb-3" controlId="number">
        <Form.Label>Contact phone</Form.Label>
        <Form.Control required type="tel" placeholder="Enter contact phone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Contact name</Form.Label>
        <Form.Control required type="text" placeholder="Enter contact name" />
        <Form.Text className="text-muted">
          We'll never share your info with anyone else.
        </Form.Text>
      </Form.Group>
      { consentCheckbox() }
      <Button variant="primary" type="submit">
        Generate Code
      </Button>
    </Form>
  )
}

export default UpdateContactUpdateForm
