'use client'
import Image from "next/image"
import AllpaLogo from "@public/assets/main-logo.png"
import AllpaLogo2 from "@public/assets/main-logo2.png"
import Icon1 from "@public/assets/icon-1.png"
import Icon2 from "@public/assets/icon-2.png"
import Icon3 from "@public/assets/icon-3.png"
import Icon4 from "@public/assets/icon-4.png"
import MainBg2 from "@public/images/main-bg2.png"
import SmAllpaLogo from "@public/assets/sm-logo-sec.png"
import SmAllpaLogoWh from "@public/assets/sm-logo-wh.png"
import RamaLogo from "@public/assets/rama-logo.png"
import RamaDark from "@public/assets/rama-logo-dark.png"
import LightLogo from "@public/assets/light-logo.png"
import Slider1 from "@public/images/slider-1.png"
import Slider2 from "@public/images/slider-2.png"
import Slider3 from "@public/images/slider-3.png"
import BgTexture from "@public/images/bg-texture.png"
import CardBg1 from "@public/images/card-1.png"
import CardBg2 from "@public/images/card-2.png"
import CardBg3 from "@public/images/card-3.png"
import RamaImg from "@public/images/rama-img.png"
import Dep1 from "@public/images/dep-1.png"
import Dep2 from "@public/images/dep-2.png"
import Dep3 from "@public/images/dep-3.png"
import { Download, Eye, Globe, Instagram, Menu, Phone, X } from 'react-feather';
import Script from 'next/script'
import Piso2 from "@public/docs/1x/PISO2.jpg"
import Piso3 from "@public/docs/1x/PISO3.jpg"
import Piso4 from "@public/docs/1x/PISO4.jpg"
import Piso5 from "@public/docs/1x/PISO5.jpg"
import Depa1 from "@public/docs/1x/DEP1.jpg"
import Depa2 from "@public/docs/1x/DEP2.jpg"
import Depa3 from "@public/docs/1x/DEP3.jpg"
import Depa4 from "@public/docs/1x/DEP4.jpg"
import Depa5 from "@public/docs/1x/DEP5.jpg"
import Depa6 from "@public/docs/1x/DEP6.jpg"
import Depa7 from "@public/docs/1x/DEP7.jpg"
import Depa8 from "@public/docs/1x/DEP8.jpg"
import Depa9 from "@public/docs/1x/DEP9.jpg"
import Depa10 from "@public/docs/1x/DEP10.jpg"
import Depa11 from "@public/docs/1x/DEP11.jpg"
import Depa12 from "@public/docs/1x/DEP12.jpg"
import Depa13 from "@public/docs/1x/DEP13.jpg"
import Depa14 from "@public/docs/1x/DEP14.jpg"
import Depa15 from "@public/docs/1x/DEP15.jpg"
import Depa16 from "@public/docs/1x/DEP16.jpg"
import Depa17 from "@public/docs/1x/DEP17.jpg"

import { useEffect, useState } from "react"

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const [menu, isMenu] = useState(false)

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
      <div className={menu?"menu active":"menu"} >
        <div className="center" onClick={()=>isMenu(true)}>
          <Menu/> Menú
        </div>
        <div className="close" onClick={()=>isMenu(false)}>
          <X className="icon"/>
        </div>
        <div className="menu-items">
          <Image src={SmAllpaLogoWh} width={120} height={'auto'} alt="Allpa"/>
          <div className="menu-item" onClick={()=>{
            scrollToSection('more')
            isMenu(false)
            }}>
            <a>
              <div className="icon-container">
                <Image src={Icon1} width={'auto'} height={30} alt="Icon 1"/>
              </div>
              Conoce Más
            </a>
          </div>
          <div className="menu-item" onClick={()=>{
            scrollToSection('dossier')
            isMenu(false)
            }}>
            <a>
              <div className="icon-container">
                <Image src={Icon2} width={'auto'} height={30} alt="Icon 2"/>
              </div>
              Departamentos
            </a>
          </div>
          <div className="menu-item" onClick={()=>{
            scrollToSection('us')
            isMenu(false)
            }}>
            <a>
              <div className="icon-container">
                <Image src={Icon3} width={'auto'} height={30} alt="Icon 3"/>
              </div>
              Nosotros
            </a>
          </div>
          <div className="menu-item" onClick={()=>{
            scrollToSection('contact')
            isMenu(false)
            }}>
            <a>
              <div className="icon-container">
                <Image src={Icon4} width={'auto'} height={30} alt="Icon 4"/>
              </div>
              Contáctanos
            </a>
          </div>
        </div>
      </div>
      <Script src='/utils/scrollSection.js'/>
      <section className="first-sec">
        <div className="logo-warp center">
          <Image src={AllpaLogo} width={290} height={'auto'} alt="Allpa"/>
          <Image src={AllpaLogo2} width={290} height={'auto'} alt="Allpa"/>
        </div>
        <div className="nav-bar center" id="nav-bar">
          <div className="nav-item center" onClick={()=>scrollToSection('more')}>
            <a>
            Conoce Más
            </a>
          </div>
          <div className="nav-item center" onClick={()=>scrollToSection('dossier')}>
            <a>
            Departamentos
            </a>
          </div>
          <div className="nav-item center" onClick={()=>scrollToSection('us')}>
            <a>
            Nosotros
            </a>
          </div>
          <div className="nav-item center" onClick={()=>scrollToSection('contact')}>
            <a>
            Contáctanos
            </a>
          </div>
        </div>
        <div className="main-render center">
          <Image className="main-bg" src={MainBg2} width={'auto'} height={1079} alt="Allpa Render"/>
        </div>
      </section>     
      <section className="second-sec" id='more'>
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
            <div className="icon-click">
              Ver
            </div>
            <Image src={Slider1} width={720} height={'auto'} alt="Render Allpa"/>
          </div>
          <div className={`img-sli center ${activeSlide === 1 ? 'active' : ''}`} onMouseEnter={() => handleSlideHover(1)}>
            <div className="icon-click">
              Ver
            </div>
            <Image src={Slider2} width={720} height={'auto'} alt="Render Allpa"/>
          </div>
          <div className={`img-sli center ${activeSlide === 2 ? 'active' : ''}`} onMouseEnter={() => handleSlideHover(2)}>
            <div className="icon-click">
              Ver
            </div>
            <Image src={Slider3} width={720} height={'auto'} alt="Render Allpa"/>
          </div>
        </div>
      </section>
      <section className="fourth-sec">
        <h1>Tu departamento diseñado <br/> como una casa.</h1>
        <div className="bg-texture center">
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
            <Image src={CardBg1} width={'auto'} height={560} alt="Bg"/>
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
            <Image src={CardBg2} width={'auto'} height={560} alt='Bg'/>
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
            <Image src={CardBg3} width={'auto'} height={560} alt="Bg"/>
          </div>
        </div>
      </section>
      <section className="sixth-sec" id='dossier'>
        <div className="header-warp">
          <h1>
            Tu nuevo <br/>Departamento
          </h1>
          <div className="price-warp">
            <span>desde</span>
            <h1>$93.690</h1>
          </div>
        </div>
        <div className="info-deps">
          <div className="tit-info">
            <span>
              Conoce todos los departamentos de <b>Allpa.</b>
            </span>
          </div>
          <div className="deps-link">
            <div className="deps-col">
              <a href="/docs/Allpa-DEP1.pdf" target='_blank'>
                <Image src={Depa1} width={200} height={"auto"} alt="Dep 1"/>
                <span>Departamento #1</span>
              </a>
              <a href="/docs/Allpa-DEP2.pdf" target='_blank'>
                <Image src={Depa2} width={200} height={"auto"} alt="Dep 2"/>
                <span>Departamento #2</span>
              </a>
              <a href="/docs/Allpa-DEP3.pdf" target='_blank'>
                <Image src={Depa3} width={200} height={"auto"} alt="Dep 3"/>
                <span>Departamento #3</span>
              </a>
              <a href="/docs/Allpa-DEP4.pdf" target='_blank'>
                <Image src={Depa4} width={200} height={"auto"} alt="Dep 4"/>
                <span>Departamento #4</span>
              </a>
              <a href="/docs/Allpa-DEP5.pdf" target='_blank'>
                <Image src={Depa5} width={200} height={"auto"} alt="Dep 5"/>
                <span>Departamento #5</span>
              </a>
              <a href="/docs/Allpa-DEP6.pdf" target='_blank'>
                <Image src={Depa6} width={200} height={"auto"} alt="Dep 6"/>
                <span>Departamento #6</span>
              </a>
              <a href="/docs/Allpa-DEP7.pdf" target='_blank'>
                <Image src={Depa7} width={200} height={"auto"} alt="Dep 7"/>
                <span>Departamento #7</span>
              </a>
              <a href="/docs/Allpa-DEP8.pdf" target='_blank'>
                <Image src={Depa8} width={200} height={"auto"} alt="Dep 8"/>
                <span>Departamento #8</span>
              </a>
              <a href="/docs/Allpa-DEP9.pdf" target='_blank'>
                <Image src={Depa9} width={200} height={"auto"} alt="Dep 9"/>
                <span>Departamento #9</span>
              </a>
              <a href="/docs/Allpa-DEP10.pdf" target='_blank'>
                <Image src={Depa10} width={200} height={"auto"} alt="Dep 10"/>
                <span>Departamento #10</span>
              </a>
              <a href="/docs/Allpa-DEP11.pdf" target='_blank'>
                <Image src={Depa11} width={200} height={"auto"} alt="Dep 11"/>
                <span>Departamento #11</span>
              </a>
              <a href="/docs/Allpa-DEP12.pdf" target='_blank'>
                <Image src={Depa12} width={200} height={"auto"} alt="Dep 12"/>
                <span>Departamento #12</span>
              </a>
              <a href="/docs/Allpa-DEP13.pdf" target='_blank'>
                <Image src={Depa13} width={200} height={"auto"} alt="Dep 13"/>
                <span>Departamento #13</span>
              </a>
              <a href="/docs/Allpa-DEP14.pdf" target='_blank'>
                <Image src={Depa14} width={200} height={"auto"} alt="Dep 14"/>
                <span>Departamento #14</span>
              </a>
              <a href="/docs/Allpa-DEP15.pdf" target='_blank'>
                <Image src={Depa15} width={200} height={"auto"} alt="Dep 15"/>
                <span>Departamento #15</span>
              </a>
              <a href="/docs/Allpa-DEP16.pdf" target='_blank'>
                <Image src={Depa16} width={200} height={"auto"} alt="Dep 16"/>
                <span>Departamento #16</span>
              </a>
              <a href="/docs/Allpa-DEP17.pdf" target='_blank'>
                <Image src={Depa17} width={200} height={"auto"} alt="Dep 17"/>
                <span>Departamento #17</span>
              </a>
            </div>        
          </div>
        </div>
        <div className="info-deps">
          <div className="tit-info">
            <span>
              Conoce cada piso de <b>Allpa.</b>
            </span>
          </div>
          <div className="deps-link">
            <div className="deps-col">
              <a href="/docs/Allpa-PISO2.pdf" target='_blank'>
                <Image src={Piso2} width={200} height={"auto"} alt="Piso 2"/>
                <span>Piso #2</span>
              </a>
              <a href="/docs/Allpa-PISO4.pdf" target='_blank'>
                <Image src={Piso4} width={200} height={"auto"} alt="Piso 4"/>
                <span>Piso #4</span>
              </a>
              <a href="/docs/Allpa-PISO3.pdf" target='_blank'>
                <Image src={Piso3} width={200} height={"auto"} alt="Piso 3"/>
                <span>Piso #3</span>
              </a>
              <a href="/docs/Allpa-PISO5.pdf" target='_blank'>
                <Image src={Piso5} width={200} height={"auto"} alt="Piso 5"/>
                <span>Piso #5</span>
              </a>
            </div>        
          </div>
        </div>
        <div className="body-warp">
          <div className="img center">
            <span>
              Dormitorio
            </span>
            <Image src={Dep1} width={715} height={'auto'} alt="Departamento" id="dep1"/>  
          </div>
          <div className="img-warp">
            <div className="img center">
              <span>
                Sala - Comedor
              </span>
              <Image src={Dep2} width={793} height={'auto'} alt="Departamento" id="dep2"/>
            </div>
            <div className="img center">
              <span>
                Cocina
              </span>
              <Image src={Dep3} width={793} height={'auto'} alt="Departamento" id="dep3"/>
            </div>
          </div>
        </div>
        <div className="dossier-link center">
          <a className="center" href="/docs/Dossier_completo-Allpa.pdf" target='_blank'>
            <Download/>
            <span>
              Descarga el <b>Dossier Completo</b>
            </span>
          </a>
        </div>
      </section>
      <section className="seventh-sec" id="us">
        <div className="content-warp">
          <div className="info-sec">
            <div className="text-warp">
              <h1>
                ¿Quiénes somos?
              </h1>
              <p>
                Allpa ha sido diseñado y construido
                por un equipo de expertos comprometidos
                con la excelencia. <b>Rama Estudio</b>, conocido
                por su enfoque en la vivienda colectiva
                sustentable.
              </p>
            </div>
            <div className="logos-warp">
              <Image src={RamaLogo} width={'auto'} height={80} alt="Rama Studio"/>
            </div>
            <div className="link-warp">
              <a className="center" href="https://ramaestudioec.com" target="_blank">
                <Globe/>
                Explora más
              </a>
            </div>
          </div>
          <div className="img-sec">
            <Image src={RamaImg} width={960} height={'auto'} alt="Rama Studio"/>
            <div className="names-warp center">
              <span>
                M.d.p. Arq. Felipe Donoso
              </span>
              <span>
                M.s. En arq. Carolina Rodas
              </span>
              <span>
                M.s. En arq. Carla Chávez
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="eigth-sec" id='contact'>
        <div className="header-logos center">
          <Image src={RamaDark} width={'auto'} height={60} alt="Rama Studio"/>
          <Image src={LightLogo} width={'auto'} height={60} alt="Allpa Habitar"/>
        </div>
        <div className="body-contact">
          <div className="col">
            <h1>
              Contáctanos
            </h1>
            <span>
              info@ramaestudioec.com
            </span>
            <span>
              <a className="center" href="https://ramaestudioec.com" target="_blank">
                <Globe/>www.ramastudioec.com
              </a>
            </span>
            <span>
              <a className="center" href="https://wa.me/+593967998694" target="_blank">
                <Phone/> Envíanos un mensaje
              </a>
            </span>
            <span className="light-txt">
              Guápulo, Quito - Ecuador
            </span>
          </div>
          <div className="col">
            <h1>
              Redes Sociales
            </h1>
            <span>
              <a className="center" href="https://www.instagram.com/ramaestudioec/" target="_blank">
                <Instagram/> @ramaestudioec
              </a>
            </span>
            <span>
              <a className="center" href="https://www.instagram.com/allpahabitar/" target="_blank">
                <Instagram/> @allpahabitar
              </a>
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
 