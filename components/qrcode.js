import qrcodeStyles from '../styles/qrcode.js'
import { useEffect } from 'react'
import QRCode from 'qrcode'

function QrCode({ primaryContact, subjectName }) {
  /**
   * Component to draw a QR code.
   */
  const canvasId = 'qrCodeCanvas'
  const helperCanvasId = 'otherQrCodeCanvas'
  const width = 300
  const height = 150
  // https://www.npmjs.com/package/qrcode#qr-code-options
  const qrOptions = {
    errorCorrectionLevel: 'H'
  }

  useEffect(() => {
    let mainCanvas = document.getElementById(canvasId)
    let helperCanvas = document.getElementById(helperCanvasId)
    let ctx = mainCanvas.getContext("2d")
    let helperCtx = helperCanvas.getContext("2d")
    ctx.font = "10px Arial"
    ctx.clearRect(0, 0, width, height); 
    // Canvas drawing happens sequentially, really think of putting paint on
    // a canvas. Everything is layered. So gotta switch colors again after filling.
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = "white"
    ctx.fill()
    ctx.fillStyle = "black"

    if (!primaryContact || !primaryContact.number) {
      ctx.fillText("(Set emergency contact info to render QR code)", 10, 70)
      visibleDownloadBtn(false)
      return
    }

    // For some reason QRCode resizes the canvas. And just changing it back distorts the text badly.
    // So we gotta do this crazy thing with two canvases and draw one into the other.
    // https://github.com/soldair/node-qrcode/blob/f08fd572d7cca92c8b9d71b24cebccf61663d4a6/lib/renderer/canvas.js#L6
    QRCode.toCanvas(helperCanvas, `tel: ${primaryContact.number}`, qrOptions)
    let imageData = helperCtx.getImageData(0, 0, helperCanvas.width, helperCanvas.height)

    // Now add the text we want to main canvas.
    ctx.fillText("Scan for emergency contact", 145, 30)
    ctx.fillText(primaryContact.name? `Ask for ${primaryContact.name}` : '', 145, 40)
    ctx.fillText(subjectName? `This is ${subjectName}` : '', 145, 50)
    ctx.fillText("www.lassie.codes", 145, 115)
    // Finally, put the helper canvas with the actual code into the main canvas with
    // the words.
    ctx.putImageData(imageData, 5, 5)

    visibleDownloadBtn(true)
  })

  const downloadImage = (e) => {
    let mainCanvas = document.getElementById(canvasId)
    let image = mainCanvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    let link = document.createElement('a');
    link.download = "qrcode.png";
    link.href = image;
    link.click();
  }

  const visibleDownloadBtn = (visible) => {
    var x = document.getElementById("downloadButton")
    if (!visible) {
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
  } 

  return (
    <div>
      <canvas id={canvasId} width={width} height={height}>
        <style jsx>
          {qrcodeStyles}
        </style>
      </canvas>
      <button id="downloadButton" onClick={(e) => downloadImage(e)}>
        Download
        <style jsx>{`
          button {
            display: none;
          }
        `}</style>
      </button>
      <canvas id={helperCanvasId}>
        <style jsx>{`
          canvas {
            visibility: hidden;
            display: true;
          }
        `}</style>
      </canvas>
    </div>
  )
}

export default QrCode
