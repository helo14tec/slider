import { useState } from 'react'
import './App.css'
import Lion from './assets/11564559994aa4023c7.jpg'
import Bang from './assets/sun1459preto1.jpg'
import Pua from './assets/Sem título.jpg'
import Disney from './assets/abrace.png'
import Pixar from './assets/Cópia de aperte e abrace.png'
import Works from './assets/Cópia de aperte .png'
import Slider from './assets/aperte e abrace.png'
import Logo from './assets/logo branco.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
      <SwiperSlide><img src={Disney} alt="" className="img-slider"/></SwiperSlide>
      <SwiperSlide><img src={Pixar} alt="" className="img-slider"/></SwiperSlide>
      <SwiperSlide><img src={Works} alt="" className="img-slider"/></SwiperSlide>
      <SwiperSlide><img src={Slider} alt="" className="img-slider"/></SwiperSlide>
    </Swiper>
        </header>

        <section className="produtos">

          {/* Produto 1 */}
          <a href="#"className="link-card">
              <div className="card">
                <img src={Lion} alt="" className="img-prod"/>
                <h2>Simba O Rei Leão Pelúcia Original Disney </h2>
                <p className="desc">Tamanho: Médio Personagem: Leão Fabricado  com preenchimento de fibra siliconada.
Pelúcia hipoalergênica </p>
                <p className="preco">R$ 167,40</p>
                <div className="avaliacao"><span> ★ ★ ★ ★ ☆ </span> (357) </div>
                <div className="off">- 15%</div>
              </div>
           </a>

          {/* Produto 2*/}
          <a href="#" className="link-card">
              <div className="card">
                <img src={Bang} alt="" className="img-prod"/>
                <h2> Pelúcia Dragão Banguela Fúria da noite </h2>
                <p className="desc">pelúcia:20CM marca:Dreamworks Garantia do vendedor: 30 dias</p>
                <p className="preco">R$ 80,41</p>
                <div className="avaliacao"> <span> ★ ★ ★ ★ ☆ </span> (28)</div>
                <div className="off">- 5%</div>
              </div>
           </a>

          {/* Produto 3*/}
          <a href="#"className="link-card">
              <div className="card">
                <img src={Pua} alt="" className="img-prod"/>
                <h2>Pelúcia Disney Pua Big Feet 35cm</h2>
                <p className="desc">     Tamanho: Aprox. 30 cm.Forma da pelúcia: Porco.Personagem: Disney.Poliéster poliéster. </p>
                <p className="preco">R$ 150,20</p>
                <div className="avaliacao"><span> ★ ★ ★ ★ ★ </span> (108)</div>
                <div className="off">- 15%</div>
              </div>
           </a>

        </section>

        <section className="destaque">
        <iframe src="https://www.youtube.com/embed/IlLPHmzWHjM?autoplay=1&mute=1&controls=0&loop=1&playlist=IlLPHmzWHjM&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>
        
        </section>
        <footer>
        
        <img src={Logo} alt="" className="logo-footer" />

                <div className="social-icons">
                  <div className="icon">
                    <img src="" alt="" id="instagram" />
                  </div>
                  <div className="icon">
                    <img src="" alt="" id="discord" />
                  </div>
                  <div className="icon">
                    <img src="" alt="" id="x" />
                  </div>
                  <div className="icon">
                    <img src="" alt="" id="youtube" />
                  </div>
                </div>

        </footer>
      </main>
    </>
  )
}

export default App
