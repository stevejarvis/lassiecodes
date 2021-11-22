import qrcodeStyles from '../styles/qrcode.js'

function QrCode({ contents }) {
  /**
   * Component to draw a QR code. "Contents" is the string that gets coded.
   */
  return (
    <div>
      <p>{ contents }</p>
      <style jsx>
        {qrcodeStyles}
      </style>
    </div>
  )
}

export default QrCode
