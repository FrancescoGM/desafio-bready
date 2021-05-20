import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`
export const Content = styled.div`
  width: 100%;
  min-height: 80px;
  max-width: 1020px;

  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;

    li {
      font-family: PT Sans, sans-serif;
      font-weight: bold;
      font-size: 1.125rem;
    }
  }

  div {
    display: flex;
    gap: 0.75rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`
