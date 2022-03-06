import Form from 'react-bootstrap/Form'

export default function consentCheckbox() {
  return (
    <Form.Group className="mb-3" controlId="consentCheck">
    <Form.Check
      required
      label="Agree to the terms and policy."
      feedback="You must agree before submitting."
      feedbackType="invalid"
    />
  </Form.Group>
  )
}