import introStyles from '../styles/intro.js'
import { useEffect } from 'react'
import { Card, CardGroup, Image } from 'react-bootstrap'

function QrIntro() {
  useEffect(() => {
  })

  return (
    <div className="introcontainer">

      <CardGroup>
        <div className="row">
          <div class="col-md-6">
            <Card>
              <Card.Body>
                <Card.Title>1. Create</Card.Title>
                <Card.Text>
                  Generate a QR code (or request an NFC tag) at the bottom of the page. Print it and stick it somewhere visible.
                </Card.Text>
                <Card.Link href="#code-select-tab-qr">Get your code</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-6'>
            <Image src='./goodboy.jpg' fluid/>
          </div>
        </div>
        <div className="row">
          <div className='col-md-4'>
            <Image src='./helmet.jpg' fluid/>
          </div>
          <div className='col-md-5'>
            <Card>
              <Card.Body>
                <Card.Title>2. Scan</Card.Title>
                <Card.Text>
                  Scan with the phone's camera app in case of emergency. Use the prompt to call the emergency contact.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-3'>
            <Image src='./scan.png' fluid/>
          </div>
        </div>
      </CardGroup>

      <style jsx>
        {introStyles}
      </style>
    </div>

  )
}

export default QrIntro
