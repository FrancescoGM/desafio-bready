import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { Container, Content } from './styles'
import { LocalCard } from '../LocalCard'

const LocalRaw: ForwardRefRenderFunction<HTMLDivElement, unknown> = (
  {},
  ref
) => {
  return (
    <Container ref={ref}>
      <Content>
        <h2 data-aos="fade-up">@bready_oficial</h2>
        <div>
          <LocalCard
            url="https://images.unsplash.com/photo-1611681867577-eb785ed0e512?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80"
            alt="Foto Ilustrativa"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            pariatur soluta similique dolorum praesentium, earum fugiat? Est
            porro, sed eum reprehenderit architecto iusto neque quis. Sit beatae
            commodi harum fugit!
          </LocalCard>
          <LocalCard
            url="https://images.unsplash.com/photo-1571030863530-022438ab3049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"
            alt="Foto Ilustrativa"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            pariatur soluta similique dolorum praesentium, earum fugiat? Est
            porro, sed eum reprehenderit architecto iusto neque quis. Sit beatae
            commodi harum fugit!
          </LocalCard>
          <LocalCard
            url="https://images.unsplash.com/photo-1612120805936-6cec8a8bbc52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"
            alt="Foto Ilustrativa"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            pariatur soluta similique dolorum praesentium, earum fugiat? Est
            porro, sed eum reprehenderit architecto iusto neque quis. Sit beatae
            commodi harum fugit!
          </LocalCard>
        </div>
      </Content>
    </Container>
  )
}

export const Local = forwardRef(LocalRaw)
