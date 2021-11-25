import contactFormStyles from '../styles/contact-form.js'

function ContactUpdateForm({ submitFunc }) {
  /**
   * Component renders the form for updating primary contact.
   */
  return (
    <div>
      <h5>Update Phone Number</h5>
      <form onSubmit={submitFunc}>
        <label htmlFor="phone number">Phone Number </label>
        <input id="number" type="phone" placeholder="contact phone number" autoComplete="phone number" required />
        <label htmlFor="name">Contact Name </label>
        <input id="name" type="name" placeholder="contact name" autoComplete="name" required />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default ContactUpdateForm
