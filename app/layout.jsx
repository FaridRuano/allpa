import "./globals.scss";

export const metadata = {
  title: "Allpa",
  description: "habitar.compartir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
