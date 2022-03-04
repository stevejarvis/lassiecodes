import Link from 'next/link'
import footerStyles from '../styles/footer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer>
      <div className="linksgrid">
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={["fab", "github"]}/><a href="https://github.com/stevejarvis/lassiecodes" target="_"> Source on Github</a>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "twitter"]}/><a href="https://twitter.com/stevenjarvis" target="_"> Reach out on Twitter</a>
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
