'use client'
import Image from "next/image"
import AllpaLogo from "@public/assets/main-logo.png"
import AllpaLogo2 from "@public/assets/main-logo2.png"
import MainBg from "@public/images/main-bg.png"
import SmAllpaLogo from "@public/assets/sm-logo-sec.png"
import SmAllpaLogoWh from "@public/assets/sm-logo-wh.png"
import Slider1 from "@public/images/slider-1.png"
import Slider2 from "@public/images/slider-2.png"
import Slider3 from "@public/images/slider-3.png"
import BgTexture from "@public/images/bg-texture.png"
import CardBg1 from "@public/images/card-1.png"
import CardBg2 from "@public/images/card-2.png"
import CardBg3 from "@public/images/card-3.png"


import { useEffect, useState } from "react"

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideHover = (index) => {
    setActiveSlide(index)
  }

  useEffect(()=>{
    window.addEventListener('scroll', function(){
      let navBar = document.getElementById('nav-bar')

      let scrollTop = window.scrollY

      let embedLimit = 580

      if(scrollTop > embedLimit){
        navBar.classList.add("embeded")
      }else{
        navBar.classList.remove("embeded")
      }
    })
  })
  

  return (
    <main>
      <section className="first-sec">
        <div className="gradient-overlay"/>
        <div className="logo-warp">
          <Image src={AllpaLogo} width={290} height={'auto'} alt="Allpa"/>
          <Image src={AllpaLogo2} width={290} height={'auto'} alt="Allpa"/>
        </div>
        <div className="nav-bar center" id="nav-bar">
          <div className="nav-item center">
            <a>
            Conoce Más
            </a>
          </div>
          <div className="nav-item center">
            <a>
            Nosotros
            </a>
          </div>
          <div className="nav-item center">
            <a>
            Redes Sociales
            </a>
          </div>
          <div className="nav-item center">
            <a>
            Precios
            </a>
          </div>
          <div className="nav-item center">
            <a>
            Contáctanos
            </a>
          </div>
         
        </div>
        <Image className="main-bg" src={MainBg} width={'auto'} height={810} alt="Allpa Render"/>
      </section>     
      <section className="second-sec">
        <Image className="sm-logo" src={SmAllpaLogo} width={120} height={'auto'} alt="Allpa"/>
        <p>
          <b>Descubre una nueva forma de vivir en Guápulo,</b> donde la belleza natural se une con la
          comodidad urbana. Allpa te invita a ser parte de una comunidad única que valora la
          sustentabilidad y la conexion con la naturaleza.
        </p>
      </section>
      <section className="third-sec">
        <div className="txt-warp center">
          <p className={activeSlide === 0 ? 'active' : ''}>Una vista<br/> que te <br/>da calma.</p>
          <p className={activeSlide === 1 ? 'active' : ''}>Naturaleza,<br/> Silencio <br/> & Cultura.</p>
          <p className={activeSlide === 2 ? 'active' : ''}>Un refugio<br/> para tu<br/> familia.</p>
        </div>
        <div className="img-slider">
          <div className={`img-sli center ${activeSlide === 0 ? 'active' : ''}`} onMouseEnter={() => handleSlideHover(0)}>
            <Image src={Slider1} width={720} height={'auto'} alt="Render Allpa"/>
          </div>
          <div className={`img-sli center ${activeSlide === 1 ? 'active' : ''}`} onMouseEnter={() => handleSlideHover(1)}>
            <Image src={Slider2} width={720} height={'auto'} alt="Render Allpa"/>
          </div>
          <div className={`img-sli center ${activeSlide === 2 ? 'active' : ''}`} onMouseEnter={() => handleSlideHover(2)}>
            <Image src={Slider3} width={720} height={'auto'} alt="Render Allpa"/>
          </div>
        </div>
      </section>
      <section className="fourth-sec center">
        <h1>Tu departamento diseñado <br/> como una casa.</h1>
        <div className="bg-texture">
          <Image src={BgTexture} width={'auto'} height={500} alt='Textura Allpa'/>
        </div>
      </section>
      <section className="fifth-sec">
        <div className="card secondary">
          <div className="text-warp">
            <Image className="sm-logo" src={SmAllpaLogoWh} width={120} height={'auto'} alt="Allpa"/>
            <p>
            En Allpa, no solo encontrarás departamentos, sino espacios flexibles
            que se adaptan a tus necesidades. Disfruta de áreas multiuso que pueden
            ser utilizadas como estudios, talleres, zonas de ejercicio u otros <b>usos
            creativos, brindándote la versatilidad</b> que necesitas en tu hogar.
            </p>
          </div>
          <div className="img-warp center">
            <Image src={CardBg1} width={'auto'} height={560}/>
          </div>
        </div>
        <div className="card variant">
          <div className="text-warp">
            <Image className="sm-logo" src={SmAllpaLogoWh} width={120} height={'auto'} alt="Allpa"/>
            <p>
            Nuestro diseño incluye <b>espacios de reforestación,
            huertos y jardines</b> que fomentan la coexistencia
            con la fauna y flora silvestres.
            </p>
          </div>
          <div className="img-warp center">
            <Image src={CardBg2} width={'auto'} height={560}/>
          </div>
        </div>
        <div className="card dark">
          <div className="text-warp">
            <Image className="sm-logo" src={SmAllpaLogoWh} width={120} height={'auto'} alt="Allpa"/>
            <p>
            Situado en el corazón de Guápulo, Allpa te brinda
            acceso a lo mejor de <b>la ciudad y la naturaleza en un
            equilibrio perfecto.</b> Disfruta de la cercanía de la icónica
            iglesia Patrimonial de Guápulo y el apacible Parque
             de Guápulo, mientras estás conectado con el centro
             norte y centro de Quito en menos de 15 minutos.
            </p>
          </div>
          <div className="img-warp center">
            <Image src={CardBg3} width={'auto'} height={560}/>
          </div>
        </div>
      </section>
    </main>
  )
}
 