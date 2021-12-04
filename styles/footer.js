import css from 'styled-jsx/css'

export default css.footer`
  footer {
    background-color: #eee;
  }
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
  nav {
    max-width: 42rem;
    margin: 1.5rem auto;
  }
  li {
    margin-right: 1rem;
  }
  li:nth-child(2) {
    margin-right: auto;
  }
  a {
    text-decoration: none;
  }
  .linksgrid {
    display: grid;
    grid-template-columns: auto auto;
  }
`