import styled from 'styled-components'

export const Container = styled.footer`
  font-family: PT Sans, sans-serif;

  span {
    display: block;
    text-align: center;
    margin-top: 4rem;
    font-size: 14px;
  }

  header {
    width: 100vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.colors['gray.700']};
    }
  }
`

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  nav {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.4rem;
      row-gap: 0.5rem;

      margin-top: 1rem;
      li {
        font-size: 1.125rem;
        cursor: pointer;
      }
    }
  }

  form {
    div {
      width: 390px;
      margin-top: 2.3rem;
      border-bottom: 2px solid ${props => props.theme.colors['gray.700']};
      display: flex;
    }
    input {
      padding-right: 1rem;
      width: 100%;
      border: none;
      outline: none;
      &::placeholder {
        font-size: 1.125rem;
      }
    }
    button {
      border: none;
      background: none;
      font-size: 1.125rem;
    }
  }

  div {
    text-align: right;
    ul {
      margin-top: 8px;
      li {
        display: flex;
        align-items: center;

        font-size: 1.125rem;
        font-weight: 700;
        & + li {
          margin-top: 4px;
        }
      }
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
`

export const SubmitButton = styled.button``