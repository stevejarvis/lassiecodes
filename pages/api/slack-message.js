/*
 * Messaging stuff. Like sending Slack messages to ourselves from a contact form.
 */
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { ManagementClient } from 'auth0'
const { WebClient } = require('@slack/web-api');

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.SLACK_TOKEN;
// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const ordersConvoId = process.env.SLACK_ORDERS_CHANNEL;

const web = new WebClient(token);

async function sendToSlack(userId, user, primaryContact, message) {
  const res = await web.chat.postMessage({
    channel: ordersConvoId,
    text: `(Fallback) From: ${user} - ${message}.`,
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": ":mailbox_with_mail: You have mail"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `_from_ ${userId} | ${user} :thumbsup:\n`
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `_contact name_ ${primaryContact.name} _contact number_ ${primaryContact.number}\n`
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `${message}`
        }
      },
    ]
  });

  // Log the message too, in case Slack post fails we can still know about it.
  console.log(`Slack contact message sent - ${res.ok? 'yes': 'no'}. From ${user}. Message: ${message}`);
}

export default withApiAuthRequired(async function toSlack(req, res) {
  try {
    const primaryContact = req.body.primaryContact
    const message = req.body.message

    const session = await getSession(req, res)
    const userId = session.user.sub
    const userName = session.user.name

    if (req.method === 'POST') {
      if (!req.body || !req.body.primaryContact) {
        res.status(400, 'No primary contact found.')
        return
      }
      await sendToSlack(userId, userName, primaryContact, message)
      res.status(200).json({})
    } else {
      res.status(405).json({ message: 'What this is?' })
      return
    }
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
})