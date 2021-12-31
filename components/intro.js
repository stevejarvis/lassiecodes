import introStyles from '../styles/intro.js'
import { useEffect } from 'react'
import { Image } from 'react-bootstrap'

function Intro() {
  useEffect(() => {
  })

  return (
    <div className="introcontainer">
      <div className="row">
        <div className='col-5 align-self-center'>
          <p>
            1. Generate the code at the bottom of the page. Print it and stick it somewhere visible.
          </p>
        </div>
        <div className='col-7'>
          <Image src='./goodboy.jpg' fluid/>
        </div>
      </div>

      <div className="row">
        <div className='col-6'>
          <Image src='./helmet.jpg' fluid/>
        </div>
        <div className='col-3 align-self-center'>
          <p>
            2. Scan with the phone's camera app in case of emergency.
          </p>
        </div>
        <div className='col-3'>
          <Image src='./scan.png' fluid/>
        </div>
      </div>

      <style jsx>
        {introStyles}
      </style>
    </div>

  )
}

export default Intro
