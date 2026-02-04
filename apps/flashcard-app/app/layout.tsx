import { Header } from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body 
        className="flex h-screen flex-col overflow-hidden px-[10px] py-[24px] md:px-[20px]"
        style={{ backgroundColor: '#F7F3F0' }}
      >
        <Header />

        <main className="min-h-0 flex-1 pt-[32px]">{children}</main>
      </body>
    </html>
  );
}
