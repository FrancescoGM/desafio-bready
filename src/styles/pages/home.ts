import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  margin-top: 80px;
`

export const Content = styled.section`
  max-width: 1080px;
  padding: 0 1rem;
  margin: 0 auto;
`

export const Banner = styled.div`
  width: 100%;
  height: 600px;
  background-image: url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const ProductsContainer = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  img {
    min-width: 150px;
    height: 150px;
    border-radius: 90px;
    object-fit: cover;
  }
`
