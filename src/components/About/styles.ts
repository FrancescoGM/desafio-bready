import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${props => props.theme.colors['gray.50']};
  width: 100vw;
  height: 700px;
  padding: 8rem 1rem;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;

  justify-content: space-between;
`

export const TextContainer = styled.div`
  max-width: 420px;

  h4 {
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 3rem;
    margin-bottom: 2rem;
  }
  p {
    text-align: justify;
  }
  img {
    margin-top: 7rem;
  }
`

export const AboutContainer = styled.div`
  gap: 8px;
  column-count: 2;
  column-gap: 10px;

  > div:nth-child(1) {
    break-inside: avoid;
    margin: 6rem 0 4rem;
  }
  > div:nth-child(2) {
    break-inside: avoid;
  }
  > div:nth-child(3) {
    margin-top: 3rem;
    break-inside: avoid;
  }
`
