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
            <em>1. Generate and print the code below. Stick it somewhere visible.</em>
          </p>
        </div>
        <div className='col-7'>
          <Image src='./lookout_mtn.jpeg' fluid/>
        </div>
      </div>

      <div className="row">
        <div className='col-7'>
          <Image src='./lookout_mtn.jpeg' fluid/>
        </div>
        <div className='col-5 align-self-center'>
          <p>
            <em>2. Scan with the phone's camera app in case of emergency.</em>
          </p>
        </div>
      </div>

      <style jsx>
        {introStyles}
      </style>
    </div>

  )
}

export default Intro
