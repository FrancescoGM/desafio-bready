import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { AboutCard } from '../AboutCard'
import { AboutContainer, Container, Content, TextContainer } from './styles'

const AboutRaw: ForwardRefRenderFunction<HTMLDivElement, unknown> = (
  {},
  ref
) => {
  return (
    <Container ref={ref}>
      <Content>
        <TextContainer>
          <h4>Saiba mais sobre a bready</h4>
          <h2>Alimentando sua barriga com alegria</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img src="/icons/arrow.svg" alt="Arrow" />
        </TextContainer>
        <AboutContainer>
          <AboutCard
            url="https://images.unsplash.com/photo-1536782896453-61d09f3aaf3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=330&q=80"
            title="Ambiente confortável"
            width="330"
            height="400"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </AboutCard>
          <AboutCard
            url="https://images.unsplash.com/photo-1549057188-efd70413345e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=330&q=80"
            title="Cozinha tradicional"
            width="330"
            height="195"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </AboutCard>
          <AboutCard
            url="https://images.unsplash.com/photo-1584799580661-53b7c6b99430?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=330&q=80"
            title="Aceitamos delivery"
            width="330"
            height="420"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </AboutCard>
        </AboutContainer>
      </Content>
    </Container>
  )
}

export const About = forwardRef(AboutRaw)
