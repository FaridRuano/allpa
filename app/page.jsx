import Image from "next/image"
import AllpaLogo from "@public/assets/main-logo.png"
import AllpaLogo2 from "@public/assets/main-logo2.png"
import MainBg from "@public/images/main-bg.png"
import SmAllpaLogo from "@public/assets/sm-logo-sec.png"


export default function Home() {
  return (
    <main>
      <section className="first-sec">
        <div className="gradient-overlay"/>
        <div className="logo-warp">
          <Image src={AllpaLogo} width={290} height={'auto'} alt="Allpa"/>
          <Image src={AllpaLogo2} width={290} height={'auto'} alt="Allpa"/>
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
          <p className="active">Una vista<br/> que te <br/>da calma.</p>
          <p>Naturaleza,<br/> Silencio <br/> & Cultura.</p>
          <p>Un refugio<br/> para tu<br/> familia.</p>

        </div>
        <div className="img-warp">

        </div>
      </section>
    </main>
  )
}
 