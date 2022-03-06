import { useState, useEffect } from 'react'

async function saveUserPreferences(contact, mailingAddress) {
  // Save the submitted info. User has to be logged in to
  // submit this form.
  // TODO this and user.js should use the same form for saving 
  // emergency contact info I think. Why don't they?
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'primaryContact': contact,
      'mailingAddress': mailingAddress
    })
  }

  const res = await fetch(
    '/api/primary-contact/',
    options
  )

  if (!res.ok) {
    delete window.__primaryContact
    return null
  }

  return await res.json()
}

async function submitRequestToSlack(contact, mailingAddress, message) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'primaryContact': contact,
      'mailingAddress': mailingAddress,
      'message': message
    })
  }

  const res = await fetch(
    '/api/slack-message/',
    options
  )

  if (!res.ok) {
    // We may never hear of it, we need some way of fallback monitoring.
    delete window.__primaryContact
    return null
  }

  return await res.json()
}

function submitTagRequestAndUpdateContact(stateSetter) {
  /**
   * Sends the order to Slack. Also saves the submission.
   * 
   * @param stateSetter (Func) setState func for setting the primary contact state
   */
  return async (event) => {
    event.preventDefault() 

    if (!event.target.number) {
      // TODO regex the number
      console.log('Cannot set a number without a number.')
      return null
    }
    const primaryContact = {
      number: event.target.number.value,
      name: event.target.name.value
    }
    const mailingAddress = {
      street: event.target.mailingStreet.value,
      city: event.target.mailingCity.value
    }

    let [saveRes, slackRes] = await Promise.all([
      saveUserPreferences(primaryContact, mailingAddress),
      submitRequestToSlack(primaryContact, mailingAddress, event.target.message.value)
    ])

    const user = saveRes
    if (typeof window !== 'undefined') {
      window.__primaryContact = user.user_metadata.primaryContact
    }

    // Clear the submitted form
    event.target.number.value = ''
    event.target.name.value = ''
    event.target.mailingStreet.value = ''
    event.target.mailingCity.value = ''
    event.target.message.value = ''
    event.target.consentCheck.checked = false

    // Set the component
    stateSetter(primaryContact)
  }
}

export function useRequestSubmitter() {
  /**
   * After send some functions to manage state and handle the request form submission.
   */
  // At the moment we aren't actually using the contact state, because the request form feels
  // like it shouldn't be pre-populated. I think because I don't want them clicking to request
  // I mail a tag as freely as I'd like them to regenerate a QR code. Leaving the possibility 
  // here though.
  const [primaryContact, setPrimaryContact] = useState(() => {
    ((typeof window !== 'undefined') && window.__primaryContact) ? window.__primaryContact : ''
  })

  useEffect(
    () => {},
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return {
    submitNfcTagRequest: submitTagRequestAndUpdateContact(setPrimaryContact)
  }
}
