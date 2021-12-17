import Link from 'next/link'
import headerStyles from '../styles/header.js'
import { Image } from 'react-bootstrap'

function Header({ user, loading }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          {!loading &&
            (user ? (
              <>
                <Image src={user.picture} roundedCircle fluid />
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
    </header>
  )
}

export default Header
