import "./globals.scss";
import MainBg2 from "@public/images/preview.jpg"


export const metadata = {
  title: "Allpa",
  description: "habitar.compartir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Allpa" />
          <meta property="og:description" content="habitar.compartir" />
          <meta property="og:image" content="public/images/preview.jpg" />
          <meta property="og:url" content="allpahabitar.com" />
          <meta property="og:type" content="website" />
          <title>Título de tu página</title>
        </head>
      <body>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  );
}
