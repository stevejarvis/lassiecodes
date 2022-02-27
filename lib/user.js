import { useState, useEffect } from 'react'

export async function fetchPrimaryContact() {
  /**
   * Fetch the user metadata when needed. Calls the API.
   */
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const res = await fetch(
    '/api/primary-contact/',
    options
  )

  if (!res.ok) {
    delete window.__primaryContact
    return null
  }

  const user = await res.json()
  if (typeof window !== 'undefined') {
    window.__primaryContact = user.user_metadata.primaryContact
  }
  return user.user_metadata.primaryContact
}

function updatePrimaryContact(stateSetter, attemptSave) {
  /**
   * Update the primary contact for the logged in user. Calls the API and
   * sets the state for the component.
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

    if (attemptSave) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'primaryContact': primaryContact
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

      const user = await res.json()
      if (typeof window !== 'undefined') {
        window.__primaryContact = user.user_metadata.primaryContact
      }
    } 

    // Clear the submitted form
    event.target.number.value = ''
    event.target.name.value = ''

    // Set the component
    stateSetter(primaryContact)
  }
}

export function useContactUpdater() {
  /**
   * After components are rendered, uses an effect to snag the primary contact info from
   * the API and set its state.
   */
  const [primaryContact, setPrimaryContact] = useState(() => {
    ((typeof window !== 'undefined') && window.__primaryContact) ? window.__primaryContact : ''
  })

  useEffect(
    () => {
      fetchPrimaryContact().then((contact) => {
        setPrimaryContact(contact)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return {
    primaryContact: primaryContact,
    updatePrimaryContact: updatePrimaryContact(setPrimaryContact, true),
    setActivePrimaryContact: updatePrimaryContact(setPrimaryContact, false)
  }
}
