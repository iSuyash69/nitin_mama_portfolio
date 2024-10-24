import { Open_Sans, Inter } from 'next/font/google'
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import ThemeContextProvider from '@/app/context/themeContext';
import MobileDeviceContextProvider from '@/app/context/mobileDeviceContext';

const openSans = Open_Sans({ weight: ['400', '600'], subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Nitin Deshpande | Portfolio",
  description: "Public Portfolio of Nitin Deshpande",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/app/assets/images/favicon-32x32.png'></link>
      </head>
      <body className={`${openSans.className} ${inter.className}`}>
        <ThemeContextProvider>
          <MobileDeviceContextProvider>
            {children}
          </MobileDeviceContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}