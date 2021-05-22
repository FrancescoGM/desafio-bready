import styled from 'styled-components'

export const Container = styled.figure`
  position: relative;
  height: min-content;
  overflow: visible;
  max-width: 350px;

  div {
    transition: filter 0.2s;
  }
  &:hover {
    div {
      filter: blur(3px);
    }
  }

  p {
    width: 100%;
    height: 100%;
    padding: 1rem;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    color: ${props => props.theme.colors['white']};
    opacity: 0;
    transition: opacity 0.2s;

    font-size: 1.125rem;
    font-weight: 500;

    &:hover {
      opacity: 1;
    }
  }
`
