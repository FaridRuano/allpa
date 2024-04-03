import Image from "next/image"
import AllpaLogo from "@public/assets/main-logo.png"
import AllpaLogo2 from "@public/assets/main-logo2.png"


export default function Home() {
  return (
    <main>
      <section className="first-sec">
        <div className="gradient-overlay"/>
        <div className="logo-warp">
          <Image className="img" src={AllpaLogo} width={545} height={180} alt="Allpa"/>
          <Image className="img" src={AllpaLogo2} width={544} height={46} alt="Allpa"/>
        </div>
      </section>      
    </main>
  )
}
 