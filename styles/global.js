import css from 'styled-jsx/css'

export default css.global`
  body {
    margin: 0;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .container {
    max-width: 42rem;
    margin: 1.5rem auto;
  }
  .rootcontainer {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
`
