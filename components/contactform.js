import contactFormStyles from '../styles/contactform.js'

function ContactUpdateForm({ submitFunc, primaryContact }) {
  /**
   * Component renders the form for updating primary contact.
   */

  const phonePlaceholder = (primaryContact && primaryContact.number) ? primaryContact.number : "Phone number"
  const contactPlaceholder = (primaryContact && primaryContact.name) ? primaryContact.name : "Contact name"

  return (
    <div>
      <form onSubmit={submitFunc}>
        <div className="formbox">
          <label htmlFor="number">Phone Number</label>
          <input id="number" type="tel" placeholder={phonePlaceholder} required />
        </div>
        <div className="formbox">
          <label htmlFor="name">Contact Name</label>
          <input id="name" type="text" placeholder={contactPlaceholder} required />
        </div>
        <button className="formbox" type="submit">Generate Code</button>
      </form>

      <style jsx>
        {contactFormStyles}
      </style>

    </div>
  )
}

export default ContactUpdateForm
