import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { ManagementClient } from 'auth0'

async function updatePrimaryContact(userId, primaryContact, client) {
  const updatedUser = await client.updateUserMetadata(
    { id: userId },
    { primaryContact: primaryContact }
  )
  return updatedUser
}

async function getPrimacyContact(userId, client) {
  const user = await client.getUser(
    { id: userId }
  )
  return user
}

export default withApiAuthRequired(async function primaryContact(req, res) {
  try {
    const primaryContact = req.body.primaryContact

    const session = await getSession(req, res)
    const userId = session.user.sub
    const accessToken = session.accessToken

    // Instead of constructing calls, use Auth0's SDK.
    const currentUserManagementClient = new ManagementClient({
      token: accessToken,
      domain: process.env.AUTH0_ISSUER_BASE_URL.replace('https://', ''),
      scope: process.env.AUTH0_SCOPE,
    })

    if (req.method === 'POST') {
      if (!req.body || !req.body.primaryContact) {
        res.status(400, 'No primary contact found.')
        return
      }
      const user = await updatePrimaryContact(userId, primaryContact, currentUserManagementClient)
      res.status(200).json(user)
    } else if (req.method === 'GET') {
      const user = await getPrimacyContact(userId, currentUserManagementClient)
      res.status(200).json(user)
    } else {
      res.status(405).send({ message: 'What this is?' })
      return
    }
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
})
