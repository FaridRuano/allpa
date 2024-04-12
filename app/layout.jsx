import "./globals.scss";
import { Head } from "next/document";
import MainBg2 from "@public/images/main-bg2.png"


export const metadata = {
  title: "Allpa",
  description: "habitar.compartir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Allpa" />
          <meta property="og:description" content="habitar.compartir" />
          <meta property="og:image" content={MainBg2} />
          <meta property="og:url" content="allpahabitar.com" />
          <meta property="og:type" content="website" />
          <title>Título de tu página</title>
        </Head>
      <body>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  );
}
