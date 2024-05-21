import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Provider from "./Provider";
// import SecondNavbar from "./Components/SecondNavbar";
import SecondNavbarWrapper from "./Components/SecondNavbar";
import SearchBox from "./Components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaurab Movie",
  description: "created using nextjs and ssr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <SecondNavbarWrapper />
          <SearchBox />
            {children}
        </Provider>
      </body>
    </html>
  );
}
