import React from 'react'
import { Helmet } from 'react-helmet'
import { BottomBanner, Header, Navbar, TopBanner } from './components'
import './css/main.css'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Rule of Thumb</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet" />
      </Helmet>
      <body>
        <Navbar />
        <Header />
        <div className="max-centered">
          <TopBanner />
          <main role="main"></main>
          <BottomBanner />
        </div>
      </body>
    </div>
  )
}

export default App
