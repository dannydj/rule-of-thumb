import React, { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet'
import { BottomBanner, CardsContainer, Footer, Header, Navbar, TopBanner } from './components'
import LocalStorageContext from './context/LocalStorage'
import './css/main.css'
import Character from './types/Character'
import { default as data } from './assets/data.json'
import { objectArrayToCharacters } from './helpers/characterMapper'

function App() {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const currentCharacters = objectArrayToCharacters(data.data)
        storeCurrentCharacters(currentCharacters)
      } catch (error) {
        console.warn(error)
      }
    })()
  }, [])

  const storeCurrentCharacters = (currentCharacters: Character[]) => {
    localStorage.setItem('characters', JSON.stringify(currentCharacters))
    setCharacters(currentCharacters)
  }

  const vote = ({ character, vote }: { character: Character; vote: 'positive' | 'negative' }) => {
    const currentCharacters = characters.map(characterItem => {
      if (characterItem.name === character.name) {
        return { ...characterItem, votes: { ...characterItem.votes, [vote]: characterItem.votes[vote] + 1 } }
      }

      return characterItem
    })

    storeCurrentCharacters(currentCharacters)
  }

  const localStorageData = useMemo(() => ({ currentCharacters: characters, storeCurrentCharacters, vote }), [characters])

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
          <main role="main">
            <LocalStorageContext.Provider value={localStorageData}>
              <CardsContainer />
            </LocalStorageContext.Provider>
          </main>
          <BottomBanner />
          <hr role="separator" />
          <Footer />
        </div>
      </body>
    </div>
  )
}

export default App
