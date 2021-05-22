import styled from 'styled-components'

export const Container = styled.section`
  margin: 8rem 0;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  text-align: center;

  h2 {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    figure:nth-child(2) {
      margin-top: 100px;
    }
  }
`
