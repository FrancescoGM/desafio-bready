import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;

  background-color: ${props => props.theme.colors.white};
`

interface MobileProps {
  isOpen?: boolean
}

export const Mobile = styled.div<MobileProps>`
  width: 100%;
  max-width: 1020px;
  min-height: 80px;
  margin: 0 auto;
  padding: 0 1rem;

  display: none;
  justify-content: space-between;
  align-items: center;
  position: relative;

  button,
  svg {
    width: 35px;
    height: 35px;
  }
  button {
    border: none;
    background: none;
  }

  > ul {
    width: 220px;
    height: 100vh;

    margin-top: 80px;
    padding: 1rem 2rem;

    text-align: right;
    font-family: PT Sans, sans-serif;
    font-size: 1.5rem;
    font-weight: 600;

    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background-color: ${props => props.theme.colors['white']};

    position: absolute;
    top: 0px;
    right: ${props => (props.isOpen ? '0px' : '-300px')};
    transition: right 0.4s ease;
  }

  @media (max-width: 650px) {
    display: flex;
  }
`

export const Web = styled.div`
  width: 100%;
  max-width: 1020px;
  min-height: 80px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    gap: 2rem;

    li {
      cursor: pointer;
      font-family: PT Sans, sans-serif;
      font-weight: bold;
      font-size: 1.125rem;
    }
  }

  nav {
    display: flex;
    gap: 0.75rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }
`
