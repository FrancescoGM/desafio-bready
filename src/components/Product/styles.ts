import styled from 'styled-components'
import { Swiper as SwiperReact } from 'swiper/react'

export const Container = styled.section`
  margin-top: 450px;
  position: relative;
  padding: 4rem 1rem;

  background-color: ${props => props.theme.colors['gray.50']};

  @media (max-width: 1120px) {
    margin-top: 0;
  }
`

export const Content = styled.div`
  max-width: 1120px;
  min-height: 400px;
  margin: 0 auto;

  display: flex;

  align-items: center;

  @media (max-width: 1120px) {
    flex-direction: column;
    > div:nth-child(1) {
      display: none !important;
    }
  }
`

export const TextContainer = styled.div`
  height: 400px;
  margin-left: 1.25rem;
  margin-right: auto;
  max-width: 360px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  @media (max-width: 1120px) {
    margin: 0 auto 2rem;
    text-align: center;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 3rem;
  }
  p {
    font-size: 0.85rem;
    text-align: justify;
  }
  a {
    width: 100%;
    max-width: 260px;
    height: 60px;

    border-radius: 4px;
    background-color: ${props => props.theme.colors['orange.100']};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: PT Sans, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    @media (max-width: 1120px) {
      margin: 1rem auto 0;
    }
  }
`

export const Swiper = styled(SwiperReact)`
  max-height: 240px;
  max-width: 400px;
  width: 100%;
`
