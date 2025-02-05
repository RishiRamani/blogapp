import "./globals.css";
import Header from "@/Components/Header";
import { AppWrapper } from "@/context/context";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Header/>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
