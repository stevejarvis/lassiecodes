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
    console.error(`Bad response, API is unhappy.`)
    delete window.__primaryContact
    return null
  }

  const user = await res.json()
  if (typeof window !== 'undefined') {
    window.__primaryContact = user.user_metadata.primaryContact
  }
  return user.user_metadata.primaryContact
}

function updatePrimaryContact(stateSetter) {
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
    const number = event.target.number.value;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'primaryContact': number
      })
    }

    const res = await fetch(
      '/api/primary-contact/',
      options
    )

    if (!res.ok) {
      console.error(`Bad response, API is unhappy.`)
      delete window.__primaryContact
      return null
    }

    const user = await res.json()
    if (typeof window !== 'undefined') {
      window.__primaryContact = user.user_metadata.primaryContact
    }

    // Clear the submitted form's phone number
    event.target.number.value = ''

    // Set the component
    stateSetter(number)

    return user
  }
}

export function useNumberUpdater() {
  /**
   * After components are rendered, uses an effect to snag the primary contact info from
   * the API and set its state.
   */
  const [primaryContact, setPrimaryContact] = useState(() => {
    ((typeof window !== 'undefined') && window.__primaryContact) ? window.__primaryContact : ''
  })

  useEffect(
    () => {
      fetchPrimaryContact().then((number) => {
        setPrimaryContact(number)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return {
    primaryContact: primaryContact,
    updatePrimaryContact: updatePrimaryContact(setPrimaryContact) 
  }
}

export async function fetchUser(cookie = '') {
  if (typeof window !== 'undefined' && window.__user) {
    return window.__user
  }

  const res = await fetch(
    '/api/me',
    cookie
      ? {
          headers: {
            cookie,
          },
        }
      : {}
  )

  if (!res.ok) {
    delete window.__user
    return null
  }

  const json = await res.json()
  if (typeof window !== 'undefined') {
    window.__user = json
  }
  return json
}

export function useFetchUser({ required } = {}) {
  const [loading, setLoading] = useState(
    () => !(typeof window !== 'undefined' && window.__user)
  )
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }

    return window.__user || null
  })

  useEffect(
    () => {
      if (!loading && user) {
        return
      }
      setLoading(true)
      let isMounted = true

      fetchUser().then((user) => {
        // Only set the user if the component is still mounted
        if (isMounted) {
          // When the user is not logged in but login is required
          if (required && !user) {
            window.location.href = '/api/login'
            return
          }
          setUser(user)
          setLoading(false)
        }
      })

      return () => {
        isMounted = false
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return { user, loading }
}
