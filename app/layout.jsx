import "./globals.scss";


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
