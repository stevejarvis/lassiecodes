import Link from 'next/link'
import footerStyles from '../styles/footer.js'

function Footer() {
  return (
    <footer>
      <div className="linksgrid">
        <nav>
          <ul>
            <li>
              <a href="https://github.com/stevejarvis/lassiecodes" target="_">Open Source on Github</a>
            </li>
            <li>
              <a href="https://twitter.com/stevenjarvis" target="_">Say Hi on Twitter</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <Link href="/privacy">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a>Terms & Conditions</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>
        {footerStyles}
      </style>
    </footer>
  )
}

export default Footer
