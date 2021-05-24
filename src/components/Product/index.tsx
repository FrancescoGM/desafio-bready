import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Image from 'next/image'
import { Container, Content, Swiper, TextContainer } from './styles'
import { SwiperSlide } from 'swiper/react'

const ProductRaw: ForwardRefRenderFunction<HTMLDivElement, unknown> = (
  {},
  ref
) => {
  return (
    <Container ref={ref}>
      <Content>
        <Image
          src="https://images.unsplash.com/photo-1583338917451-face2751d8d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=620&q=80"
          alt="Foto ilustrativa"
          width="310"
          height="400"
          objectFit="cover"
          data-aos="fade-up"
        />
        <TextContainer data-aos="fade-up">
          <h4>Conheça mais sobre nossos produtos</h4>
          <h2>Infinitas variedades para todos os gostos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            facere laboriosam asperiores ullam blanditiis dolores rerum
            obcaecati quasi sunt, nam architecto sapiente, est reiciendis
            numquam hic dolore iure laborum quia.
          </p>
          <a href="#">Acessar loja</a>
        </TextContainer>
        <Swiper
          navigation={true}
          autoplay={{ delay: 1500 }}
          loop={true}
          pagination={{
            clickable: true
          }}
        >
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Café"
              width="400"
              height="240"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Bolo"
              width="400"
              height="240"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Pão integral"
              width="400"
              height="240"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1582796064100-db4cdf9a6e64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Café"
              width="400"
              height="240"
              objectFit="cover"
            />
          </SwiperSlide>
        </Swiper>
      </Content>
    </Container>
  )
}

export const Product = forwardRef(ProductRaw)
