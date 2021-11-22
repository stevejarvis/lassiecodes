import Link from 'next/link'
import footerStyles from '../styles/footer.js'

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {footerStyles}
      </style>
    </footer>
  )
}

export default Footer
