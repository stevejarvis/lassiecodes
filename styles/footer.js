import css from 'styled-jsx/css'

export default css.header`
  ul {
    display: flex;
    list-style: none;
    margin-left: 0;
    padding-left: 0;
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
  button {
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    border: none;
    background: none;
  }
`