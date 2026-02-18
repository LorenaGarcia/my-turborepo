import Providers from "../lib/providers";
import "./globals.css";

export const metadata = {
  title: "Lorena García - Portfolio",
  description: "Portafolio profesional de Lorena García",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
