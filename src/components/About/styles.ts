import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${props => props.theme.colors['gray.50']};
  width: 100%;

  height: 700px;
  padding: 8rem 1rem;

  @media (max-width: 1120px) {
    height: 100%;
    padding: 3rem 1rem;
  }
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;

  justify-content: space-between;

  @media (max-width: 1120px) {
    text-align: center;
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  max-width: 420px;

  @media (max-width: 1120px) {
    margin: 0 auto;
  }
  @media only screen and (height: 500px) {
    animation: animateUp 2s;
  }
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

    animation: arrowAnimation 1.5s infinite;

    @keyframes arrowAnimation {
      0% {
        transform: translateY(-50px);
        opacity: 0;
      }
      80% {
        opacity: 1;
      }
      100% {
        transform: translateY(20px);
        opacity: 0;
      }
    }

    @media (max-width: 1120px) {
      display: none;
    }
  }
`

export const AboutContainer = styled.div`
  gap: 8px;
  column-count: 2;
  column-gap: 10px;

  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;

    margin: 4rem auto 0;
  }

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
  > div:nth-child(1),
  > div:nth-child(2),
  > div:nth-child(3) {
    @media (max-width: 1120px) {
      margin: 1rem 0;
    }
  }
`
