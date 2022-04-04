import Link from 'next/link'
import headerStyles from '../styles/header.js'
import { Image } from 'react-bootstrap'

function Header({ user, loading }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
              <Image href="/" src='./logo.png' className="navimg"></Image>
            </a>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/support">
              <a>Support</a>
            </Link>
          </li>
          {!loading &&
            (user ? (
              <>
                <Image src={user.picture} className="navimg rounded pe-3"/>
                <li>
                  <a href="/api/auth/logout">Logout</a>
                </li>
              </>
            ) : (
              <li>
                <a href="/api/auth/login">Login</a>
              </li>
            ))}
        </ul>
      </nav>

      <style jsx>
        {headerStyles}
      </style>
      <style jsx global>{`
        .navimg {
          height: 1.4rem;
          width: auto
        }
      `}</style>
    </header>
  )
}

export default Header
