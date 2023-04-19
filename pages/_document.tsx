import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '../componenets/NavBar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <main className="bg-gray-100 min-h-screen w-screen text-black">
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
        <Main />
        <NextScript />
        </main>
        </main>
      </body>
    </Html>
  )
}
