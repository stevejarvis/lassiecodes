import contactFormStyles from '../styles/contact-form.js'

function ContactUpdateForm({ submitFunc, primaryContact }) {
  /**
   * Component renders the form for updating primary contact.
   */

  const phonePlaceholder = (primaryContact && primaryContact.number) ? primaryContact.number : "Phone number"
  const contactPlaceholder = (primaryContact && primaryContact.name) ? primaryContact.name : "Contact name"

  return (
    <div>
      <form onSubmit={submitFunc}>
        <div>
          <label htmlFor="number">Phone Number</label>
          <input id="number" type="tel" placeholder={phonePlaceholder} required />
        </div>
        <div>
          <label htmlFor="name">Contact Name</label>
          <input id="name" type="text" placeholder={contactPlaceholder} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default ContactUpdateForm
