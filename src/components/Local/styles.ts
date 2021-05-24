import styled from 'styled-components'

export const Container = styled.section`
  margin: 8rem 0;
  padding: 0 1rem;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  text-align: center;

  @media (max-width: 1120px) {
    flex-direction: column;
    gap: 2rem;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1120px) {
      figure {
        margin: 0 auto;
      }
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
    }

    figure:nth-child(2) {
      margin-top: 100px;
      @media (max-width: 1120px) {
        margin-top: 0;
      }
    }
  }
`
