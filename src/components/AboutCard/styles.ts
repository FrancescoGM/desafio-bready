import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors['gray.50']};
  width: 330px;
  min-width: 330px;
  text-align: center;
`
export const Content = styled.div`
  padding: 0 8px 16px;

  h3 {
    font-size: 1.125rem;
    margin: 16px 0 8px;
  }
  p {
    font-size: 0.875rem;
  }
`
