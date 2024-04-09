import { Menu } from "react-feather";
import "./globals.scss";

export const metadata = {
  title: "Allpa",
  description: "habitar.compartir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  );
}
